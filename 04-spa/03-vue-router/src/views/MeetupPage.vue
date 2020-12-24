<template>
  <div class="container">
    <h1>Meetup Page {{ meetupId }}</h1>
    <router-link to="/meetups/2">Go To Meetup 2</router-link>
    <template v-if="meetup">
      <h3>{{ meetup.title }}</h3>
      <p>
        <router-link :to="{ name: 'meetup-description', params: { meetupId } }"
          >Description</router-link
        >
      </p>
      <p>
        <router-link :to="{ name: 'meetup-agenda', params: { meetupId } }"
          >Agenda</router-link
        >
      </p>
      <router-view :meetup="meetup" />
    </template>
    <template v-else>
      <h3>Loading...</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MeetupPage',

  props: {
    meetupId: {
      type: String,
      required: true,
    },
  },

  beforeRouteEnter(to, from, next) {
    fetch(`/api/meetups/${to.params.meetupId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        } else {
          return res.json();
        }
      })
      .then((meetup) => {
        next((vm) => {
          vm.setMeetup(meetup);
        });
      })
      .catch(() => {
        next('/meetups');
      });
  },

  beforeRouteUpdate(to, from, next) {
    if (to.params.meetupId === from.params.meetupId) {
      next();
    } else {
      fetch(`/api/meetups/${to.params.meetupId}`)
        .then((res) => res.json())
        .then((meetup) => {
          this.setMeetup(meetup);
          next();
        });
    }
  },

  data() {
    return {
      meetup: null,
    };
  },

  // watch: {
  //   meetupId: {
  //     immediate: true,
  //     handler(newMeetupId) {
  //       this.meetup = null;
  //       fetch(`/api/meetups/${newMeetupId}`)
  //         .then((res) => res.json())
  //         .then((meetup) => {
  //           this.setMeetup(meetup);
  //         });
  //     },
  //   }
  // },

  // computed: {
  //   meetupId() {
  //     return this.$route.params.meetupId;
  //   },
  // },

  methods: {
    setMeetup(meetup) {
      this.meetup = meetup;
    },
  },
};
</script>

<style scoped></style>
