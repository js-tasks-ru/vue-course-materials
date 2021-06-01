import { shallowMount } from '@vue/test-utils';
import AppInput from '@/components/AppInput';

// test('AppInput should be defined', () => {
//   expect(AppInput).toBeDefined();
// });

describe('AppInput', () => {
  it('should be defined', () => {
    expect(AppInput).toBeDefined();
  });

  it('should render input.input-group inside .form-control', async () => {
    const wrapper = shallowMount(AppInput);
    const inputGroup = wrapper.find('.input-group');
    const formControl = inputGroup.find('input.form-control');
    expect(inputGroup.exists()).toBe(true);
    expect(formControl.exists()).toBe(true);
  });

  it('should not have .form-control_rounded on input by default', async () => {
    const wrapper = shallowMount(AppInput);
    expect(wrapper.find('input').classes('form-control_rounded')).toBe(false);
  });

  it('should have .form-control_rounded on input with rounded', async () => {
    const wrapper = shallowMount(AppInput, { propsData: { rounded: true } });
    expect(wrapper.find('input').classes('form-control_rounded')).toBe(true);
  });

  it('should have toggle .form-control_rounded on input by rounded', async () => {
    const wrapper = shallowMount(AppInput);
    const input = wrapper.find('input');
    expect(input.classes('form-control_rounded')).toBe(false);

    await wrapper.setProps({ rounded: true });
    // await wrapper.vm.$nextTick();
    expect(input.classes('form-control_rounded')).toBe(true);
  });

  it('should have current value', async () => {
    const value = 'SameValue';
    const wrapper = shallowMount(AppInput, { propsData: { value } });
    expect(wrapper.find('input').element.value).toBe(value);
  });

  it.each(['password', 'num', 'range', 'date', 'time', 'email', 'tel'])(
    'should render input type=(%s)',
    (type) => {
      const wrapper = shallowMount(AppInput, { attrs: { type } });
      expect(wrapper.find('.form-control').attributes('type')).toBe(type);
    },
  );

  it('should emit input inputted value on input', async () => {
    const value = 'TEST_VALUE';
    const wrapper = shallowMount(AppInput);
    // wrapper.find('.form-control').element.value = value;
    // await wrapper.find('.form-control').trigger('input');
    await wrapper.find('.form-control').setValue(value);

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input).toHaveLength(1);
    expect(wrapper.emitted().input[0]).toEqual([value]);
  });

  it('should handle change event', async () => {
    const value = 'TEST_VALUE';
    const handler = jest.fn();
    const wrapper = shallowMount(AppInput, {
      listeners: {
        change: (event) => handler(event.target.value),
      },
    });

    await wrapper.find('.form-control').setValue(value);
    await wrapper.find('.form-control').trigger('change');

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(value);
  });

  it('should match snapshot', async () => {
    const wrapper = shallowMount(AppInput);
    expect(wrapper).toMatchSnapshot();
  });
});
