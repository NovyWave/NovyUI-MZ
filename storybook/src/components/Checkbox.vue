<template>
  <div :style="checkboxContainerStyle">
    <!-- Hidden Input -->
    <input
      ref="inputRef"
      type="checkbox"
      :id="computedInputId"
      :checked="isChecked"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :required="required"
      :aria-describedby="computedDescriptionId"
      :aria-labelledby="computedLabelId"
      :style="hiddenInputStyle"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />

    <!-- Checkbox Visual -->
    <label
      :for="computedInputId"
      :style="checkboxStyle"
      :class="checkboxClass"
    >
      <!-- Check Icon -->
      <Icon
        v-if="isChecked && !indeterminate"
        :name="'check'"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :aria-hidden="true"
        :style="iconStyle"
      />

      <!-- Indeterminate Icon -->
      <Icon
        v-else-if="indeterminate"
        :name="'minus'"
        :width="iconSize"
        :height="iconSize"
        :color="iconColor"
        :aria-hidden="true"
        :style="iconStyle"
      />
    </label>

    <!-- Label Content -->
    <div v-if="hasLabelContent" :style="labelContentStyle">
      <label
        v-if="label"
        :for="computedInputId"
        :style="labelStyle"
        :id="computedLabelId"
      >
        {{ label }}
      </label>

      <p
        v-if="description"
        :style="descriptionStyle"
        :id="computedDescriptionId"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type CSSProperties } from 'vue';
import { color, spacing, cornerRadius, border, shadow, typography, transition, useTheme } from '../tokens';
import Icon from './Icon.vue';

type Size = 'small' | 'medium' | 'large';

const props = withDefaults(defineProps<{
  modelValue?: boolean | string[] | number[];
  value?: string | number;
  size?: Size;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  label?: string;
  description?: string;
  inputId?: string;
  labelId?: string;
  descriptionId?: string;
}>(), {
  modelValue: false,
  size: 'medium',
  disabled: false,
  required: false,
  indeterminate: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[] | number[]];
  'change': [value: boolean | string[] | number[], event: Event];
  'focus': [event: FocusEvent];
  'blur': [event: FocusEvent];
}>();

const theme = useTheme();

// State
const focused = ref(false);
const inputRef = ref<HTMLInputElement>();

// Generate unique IDs if not provided
const uniqueId = Math.random().toString(36).substr(2, 9);
const computedInputId = computed(() => props.inputId || `checkbox-${uniqueId}`);
const computedLabelId = computed(() => props.labelId || `checkbox-label-${uniqueId}`);
const computedDescriptionId = computed(() => props.descriptionId || `checkbox-description-${uniqueId}`);

// Computed properties
const isArray = computed(() => Array.isArray(props.modelValue));

const isChecked = computed(() => {
  if (isArray.value && props.value !== undefined) {
    return (props.modelValue as (string | number)[]).includes(props.value);
  }
  return Boolean(props.modelValue);
});

const hasLabelContent = computed(() => props.label || props.description);

// Size configuration
const sizeConfig = computed(() => {
  const size = props.size;

  if (size === 'small') {
    return {
      checkboxSize: '16px',
      iconSize: '12px',
      labelFontSize: typography.size['14px'],
      descriptionFontSize: typography.size['12px'],
      gap: spacing['12px'],
    };
  } else if (size === 'large') {
    return {
      checkboxSize: '22px',
      iconSize: '16px',
      labelFontSize: typography.size['18px'],
      descriptionFontSize: typography.size['16px'],
      gap: spacing['16px'],
    };
  } else {
    return {
      checkboxSize: '18px',
      iconSize: '14px',
      labelFontSize: typography.size['16px'],
      descriptionFontSize: typography.size['14px'],
      gap: spacing['12px'],
    };
  }
});

const iconSize = computed(() => sizeConfig.value.iconSize);

const iconColor = computed(() => {
  if (props.disabled) {
    return color.neutral['5'].value;
  }
  return color.neutral['1'].value;
});

const checkboxClass = computed(() => {
  const classes = [];
  if (isChecked.value) classes.push('checked');
  if (props.indeterminate) classes.push('indeterminate');
  if (props.disabled) classes.push('disabled');
  if (focused.value) classes.push('focused');
  return classes.join(' ');
});

const checkboxContainerStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  alignItems: props.description ? 'flex-start' : 'center',
  gap: sizeConfig.value.gap,
  fontFamily: typography.family.sans,
}));

const hiddenInputStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  opacity: '0',
  pointerEvents: 'none',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
}));

const checkboxStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  let backgroundColor: string;
  let borderColor: string;
  let boxShadow: string = 'none';

  if (props.disabled) {
    backgroundColor = isDark ? color.neutral['3'].value : color.neutral['2'].value;
    borderColor = color.neutral['4'].value;
  } else if (isChecked.value || props.indeterminate) {
    backgroundColor = color.primary['7'].value;
    borderColor = color.primary['7'].value;
    boxShadow = `${shadow.size[1]} ${shadow.color.primary}`;
  } else {
    backgroundColor = isDark ? color.neutral['2'].value : color.neutral['1'].value;
    borderColor = color.neutral['5'].value;
  }

  return {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizeConfig.value.checkboxSize,
    height: sizeConfig.value.checkboxSize,
    backgroundColor,
    border: `${border.width['2px']} ${border.style.solid} ${borderColor}`,
    borderRadius: cornerRadius['4px'],
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: transition.normal,
    flexShrink: '0',
    outline: focused.value ? `2px solid ${color.primary['7'].value}` : 'none',
    outlineOffset: '2px',
    boxShadow,
  };
});

const iconStyle = computed<CSSProperties>(() => ({
  transition: transition.fast,
  transform: 'translateX(1px)', // Slight optical centering adjustment
}));

const labelContentStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing['4px'],
  flex: '1',
}));

const labelStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.labelFontSize,
    fontWeight: String(typography.weight['5']),
    lineHeight: String(typography.line['140%']),
    color: props.disabled
      ? color.neutral['5'].value
      : isDark ? color.neutral['11'].value : color.neutral['9'].value,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    margin: '0',
  };
});

const descriptionStyle = computed<CSSProperties>(() => {
  const isDark = theme.value === 'dark';

  return {
    fontSize: sizeConfig.value.descriptionFontSize,
    fontWeight: String(typography.weight['4']),
    lineHeight: String(typography.line['140%']),
    color: props.disabled
      ? color.neutral['5'].value
      : isDark ? color.neutral['8'].value : color.neutral['7'].value,
    margin: '0',
  };
});

// Watch for indeterminate changes
watch(() => props.indeterminate, (newValue) => {
  if (inputRef.value) {
    inputRef.value.indeterminate = newValue;
  }
}, { immediate: true });

// Event handlers
const onChange = (event: Event) => {
  if (props.disabled) return;

  const target = event.target as HTMLInputElement;
  const checked = target.checked;

  if (isArray.value && props.value !== undefined) {
    const currentValues = [...(props.modelValue as (string | number)[])];

    if (checked) {
      // Add value to array
      if (!currentValues.includes(props.value)) {
        currentValues.push(props.value);
      }
    } else {
      // Remove value from array
      const index = currentValues.indexOf(props.value);
      if (index > -1) {
        currentValues.splice(index, 1);
      }
    }

    emit('update:modelValue', currentValues);
    emit('change', currentValues, event);
  } else {
    emit('update:modelValue', checked);
    emit('change', checked, event);
  }
};

const onFocus = (event: FocusEvent) => {
  focused.value = true;
  emit('focus', event);
};

const onBlur = (event: FocusEvent) => {
  focused.value = false;
  emit('blur', event);
};
</script>
