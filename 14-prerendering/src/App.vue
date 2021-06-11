<template>
  <div id="app">
    <div class="wrapper bg-grey">
      <header class="header">
        <div>
          <h1>
            <router-link :to="{ name: 'index' }">
              <img src="@/assets/logo.svg" alt="Meetups" />
            </router-link>
          </h1>
        </div>
        <nav>
          <router-link
            v-if="
              $route.matched.some((route) => route.meta.showReturnToMeetups)
            "
            :to="{ name: 'meetups' }"
            >&larr; Вернуться к списку</router-link
          >
          <router-link to="/login">Вход</router-link>
          <router-link to="#">Регистрация</router-link>
          <router-link to="#">Создать митап</router-link>
        </nav>
      </header>
      <main class="main">
        <router-view />
      </main>
      <footer class="footer">
        <div class="container">
          &copy; 2020. learn.javascript.ru
          <a href="https://learn.javascript.ru/courses/vue">Vue.js Course</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}

.header {
  padding: 44px 0 32px;
  background-color: var(--white);
}

.header h1,
.header h1 a {
  font-weight: 900;
  font-size: 34px;
  line-height: 30px;
  text-align: center;
  margin: 0 0 24px;
  text-transform: uppercase;
  color: var(--body-color);
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 24px;
}

nav a {
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  text-decoration: none;
  padding: 0 20px;
  position: relative;
  display: inline-flex;
}

nav a + a {
  margin-top: 8px;
}

nav a:hover {
  color: var(--blue);
}

nav a:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-2px, -50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--grey);
}

@media all and (min-width: 992px) {
  nav {
    flex-direction: row;
    align-items: center;
    margin-left: 0;
  }

  nav a,
  nav a + a {
    margin-top: 0;
  }

  nav a:first-child:before {
    display: none;
  }
}

.avatar {
  border-radius: 100%;
  margin-right: 8px;
}

.footer {
  padding: 100px 0 60px;
  text-align: center;
}
</style>
