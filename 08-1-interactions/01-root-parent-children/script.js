import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

const ChildComponent1 = {
  template: `<span>Child 1</span>`,

  data() {
    return {
      value: 'C1',
    };
  },
};

const ChildComponent2 = {
  template: `<span>Child 2</span>`,

  data() {
    return {
      value: 'C2',
    };
  },
};

const MiddleComponent = {
  template: `
    <div>
      <child-component1 />
      <child-component2 />
      <p>Parent value = {{ $parent.value }} ($parent.value)</p>
      <p>Root value = {{ $root.value }} ($root.value)</p>
      <p v-for='(child, i) in $children'>Child value = {{ child.value }} ($children[i].value)</p>
    </div>`,

  components: { ChildComponent1, ChildComponent2 },

  data() {
    return {
      value: 'B',
    };
  },

  mounted() {
    // Когда компонент смонтирован, дети ещё нет, $children - пуст
    // $children - не реактивный

    // После следующего тика дети будут уже смонтированы
    this.$nextTick().then(() => {
      // forceUpdate заставит перерендерить компонент и вывести новое значение $children
      // this.$forceUpdate();
    });

  },
};

const ParentComponent = {
  template: `
    <section>
      <middle-component />
    </section>`,

  components: { MiddleComponent },

  data() {
    return {
      value: 'A',
    };
  },
};

const App = {
  template: `
    <main id='app'>
      <parent-component />
    </main>`,

  components: { ParentComponent },

  data() {
    return {
      value: 'App',
    };
  },
};

const app = new Vue(App).$mount('#app');
