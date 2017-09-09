<template>
  <div id="app">
    <div class="container">

      <div class="logo">
        <img src="./assets/logo-site.png"
          alt="v-img logo">
      </div>

      <div class="links">
        <a :href="links.github">Github</a>
        <a :href="links.npm">npm</a>
      </div>

      <p class="description">
        Image gallery has never been that easy to setup.
      </p>

    </div>

    <div class="container-fluid grey-bg">
      <div class="container">

        <div class="row">
          <div class="col-12">
            <div class="showcase">
              <h2>Single image</h2>
              <div class="images">
                <img v-img="{ title: 'Times Square' }"
                  src="./assets/i-1.jpg"
                  alt="Single image">
              </div>
              <code-highlight>
&lt;img v-img="{ title: 'Times Square' }" src="..."&gt;
              </code-highlight>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="showcase last">
              <h2>Multiple images</h2>
              <div class="images">
                <img v-img:my-group
                  src="./assets/i-2.jpg"
                  alt="Multiple images">
                <img v-img:my-group
                  src="./assets/i-3.jpg"
                  alt="Multiple images">
              </div>
              <code-highlight>
&lt;img v-img:my-group src="..."&gt;
&lt;img v-img:my-group src="..."&gt;
              </code-highlight>
            </div>
          </div>
        </div>

      </div>
    </div>

    <footer>
      <p class="donate">
        You can donate me a couple of dollars to renew domain of this page.<br>
        <a class="paypal" href="https://paypal.me/fahrenq">Paypal</a>
      </p>

      <p>
        Developing by <a class="me" href="https://twitter.com/fahrenq">Ivan Kuznetsov</a> and <a class="contributors" href="https://github.com/crowdbotics/v-img/graphs/contributors">awesome contributors</a><br>
        with huge support from <a class="cb" href="https://www.crowdbotics.com/">Crowdbotics</a>.
      </p>
    </footer>

  </div>

</template>

<script>

export default {
  data() {
    return {
      links: {
        github: 'https://github.com/crowdbotics/v-img',
        npm: 'https://www.npmjs.com/package/v-img',
      }
    };
  },
  components: {
    'code-highlight': {
      template: `
        <pre><code class="html"><slot></slot></code></pre>
      `,
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');

body {
  margin: 0;
  padding: 0;
}

.logo {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 100%;
  object-fit: scale-down;
  max-width: 775px;
}

.links {
  margin: 70px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links a {
  width: 100px;
  border-radius: 999px;
  border: 2px solid #41B883;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  color: #39393e;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  transition: all .3s ease-in-out;
}

.links a:not(:first-child) {
  margin-top: 10px;
}

.links a:hover {
  color: white;
  background-color: #41B883;
}

.description {
  text-align: center;
  color: #bcbcbc;
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  margin-bottom: 70px;
}

.grey-bg {
  background-color: rgba(65, 184, 131, .1);
  border-top: 10px solid #41B883;
  border-bottom: 10px solid #41B883;
}

.showcase {
  border-bottom: 5px solid #41B883;
}

.showcase.last {
  border-bottom: none;
}

.showcase h2 {
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  margin: 20px 0;
}

.showcase .images {
  display: flex;
  justify-content: center;
}

.showcase .images img {
  max-height: 300px;
  padding: 0 5px;
}

.showcase pre {
  margin: 20px 0;
}

.showcase code {
  padding: 0 25px;
  font-size: 17px;
  line-height: 1.4;
}

footer {
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

footer p {
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  margin: 0;
  color: #39393e;
  text-align: center;
}

footer p a {
  text-decoration: none;
  color: #39393e;
  font-weight: 600;
}

footer p .me {
  color: #00aced;
}

footer p .contributors {
  color: black;
}

footer p .cb {
  color: #e2424a;
}

footer p.donate {
  padding-bottom: 60px;
  color: #afafaf;
}

footer p.donate .paypal {
  color: rgba(0, 156, 222, .5);
}

</style>
