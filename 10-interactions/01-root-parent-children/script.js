import Vue from './vendor/vue.esm.browser.js';

const ChildComponent1 = {
  data() {
    return {
      value: 'C1',
    };
  },

  template: `<span>Child 1</span>`,
};

const ChildComponent2 = {
  data() {
    return {
      value: 'C2',
    };
  },

  template: `<span>Child 2</span>`,
};

const MiddleComponent = {
  components: { ChildComponent1, ChildComponent2 },

  data() {
    return {
      value: 'B',
    };
  },

  mounted() {
    // Когда компонент монтируется первый раз, дети ещё не смонтированы, $children - пуст
    // $children - не реактивный
    // forceUpdate заставит перерендерить компонент и вывести новое значение $children
    // this.$forceUpdate();
  },

  template: `
    <div>
      <child-component1 />
      <child-component2 />
      <p>Parent value = {{ $parent.value }} ($parent.value)</p>
      <p>Root value = {{ $root.value }} ($root.value)</p>
      <p v-for='(child, i) in $children'>Child value = {{ child.value }} ($children[i].value)</p>
    </div>`,
};

const ParentComponent = {
  components: { MiddleComponent },

  data() {
    return {
      value: 'A',
    };
  },

  template: `
    <section>
      <middle-component />
    </section>`,
};

const App = {
  components: { ParentComponent },

  data() {
    return {
      value: 'App',
    };
  },

  template: `
    <main id='app'>
      <parent-component />
    </main>`,
};

new Vue(App).$mount('#app');
