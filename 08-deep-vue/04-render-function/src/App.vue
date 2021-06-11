<!--<template>
  <fieldset-component>
    <text-div />
    <counter-button v-model="count" />
  </fieldset-component>
</template>-->

<script>
import FieldsetComponent from './FieldsetComponent';
import TextDiv from './TextDiv';
import CounterButton from './CounterButton';

export default {
  name: 'App',

  components: { CounterButton, TextDiv, FieldsetComponent },

  data() {
    return {
      count: 0,
    };
  },

  /*render(h) {
    const counterButton = h(CounterButton, {
      props: {
        count: this.count,
      },
      on: {
        change: ($event) => {
          this.count = $event;
        },
      },
    });

    const content = [h(TextDiv), counterButton];

    return h(FieldsetComponent, content);
  },*/
  render() {
    const counterButton = <CounterButton vModel={this.count} />;

    const content = [<TextDiv />, counterButton];

    return <FieldsetComponent>{content}</FieldsetComponent>;
  },
};
</script>
