import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const TextDiv = {
  name: 'TextDiv',

  // template: '<div>TextDiv</div>',

  render(h) {
    return <div>TextDiv</div>;
  },
};

const FieldsetComponent = {
  name: 'FieldsetComponent',

  // template: '<fieldset><slot /></fieldset>',

  render(h) {
    return <fieldset>{this.$slots.default}</fieldset>;
  },
};

const CounterButton = {
  name: 'CounterButton',
  // template: `<button @click="$emit('change', count + 1)">{{ count }}</button>`,

  props: {
    count: Number,
  },

  model: {
    prop: 'count',
    event: 'change',
  },

  render(h) {
    return (
      <button onClick={this.$emit('change', this.count + 1)}>
        {this.count}
      </button>
    );
  },
};

const App = {
  name: 'App',

  template: `<fieldset-component>
    <text-div />
    <counter-button v-model="count" />
  </fieldset-component>`,

  components: {
    FieldsetComponent,
    TextDiv,
    CounterButton,
  },

  data() {
    return {
      count: 0,
    };
  },

  render(h) {
    const counterButton = <CounterButton vModel={this.count} />;

    const content = [<TextDiv />, counterButton];

    return <FieldsetComponent>{content}</FieldsetComponent>;
  },
};

new Vue(App).$mount('#app');

/*
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // An HTML tag name, component options, or async
  // function resolving to one of these. Required.
  'div',

  // {Object}
  // A data object corresponding to the attributes
  // you would use in a template. Optional.
  {
    // (see details in the next section below)
  },

  // {String | Array}
  // Children VNodes, built using `createElement()`,
  // or using strings to get 'text VNodes'. Optional.
  [
    'Some text comes first.',
    createElement('h1', 'A headline'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)*/

/*
{
  // Same API as `v-bind:class`, accepting either
  // a string, object, or array of strings and objects.
  class: {
    foo: true,
    bar: false
  },
  // Same API as `v-bind:style`, accepting either
  // a string, object, or array of objects.
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // Normal HTML attributes
  attrs: {
    id: 'foo'
  },
  // Component props
  props: {
    myProp: 'bar'
  },
  // DOM properties
  domProps: {
    innerHTML: 'baz'
  },
  // Event handlers are nested under `on`, though
  // modifiers such as in `v-on:keyup.enter` are not
  // supported. You'll have to manually check the
  // keyCode in the handler instead.
  on: {
    click: this.clickHandler
  },
  // For components only. Allows you to listen to
  // native events, rather than events emitted from
  // the component using `vm.$emit`.
  nativeOn: {
    click: this.nativeClickHandler
  },
  // Custom directives. Note that the `binding`'s
  // `oldValue` cannot be set, as Vue keeps track
  // of it for you.
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // Scoped slots in the form of
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // The name of the slot, if this component is the
  // child of another component
  slot: 'name-of-slot',
  // Other special top-level properties
  key: 'myKey',
  ref: 'myRef',
  // If you are applying the same ref name to multiple
  // elements in the render function. This will make `$refs.myRef` become an
  // array
  refInFor: true
}
*/
