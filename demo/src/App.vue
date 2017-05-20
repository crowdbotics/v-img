<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Single image</h1>
          <div class="well gal">
            <img v-img src="https://unsplash.it/800/1200?image=1062">
          </div>
          <pre><code class="html">
    &lt;img v-img src="https://unsplash.it/800/1200?image=1062"&gt;
          </code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1>Group of images</h1>
          <div class="well gal">
            <img v-img:group-1 src="https://unsplash.it/800/1200?image=1063">
            <img v-img:group-1 src="https://unsplash.it/800/1200?image=1064">
            <img v-img:group-1 src="https://unsplash.it/800/1200?image=1065">
            <img v-img:group-1 src="https://unsplash.it/800/1200?image=1067">
          </div>
          <pre><code class="html">
    &lt;img v-img:group src="https://unsplash.it/800/1200?image=1063"&gt;
    &lt;img v-img:group src="https://unsplash.it/800/1200?image=1064"&gt;
    &lt;img v-img:group src="https://unsplash.it/800/1200?image=1065"&gt;
    &lt;img v-img:group src="https://unsplash.it/800/1200?image=1067"&gt;
          </code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1>Different groups of images</h1>
          <div class="row">
            <div class="col-md-6">
              <h2>Group 1</h2>
              <div class="well gal">
                <img v-img:group-2 src="https://unsplash.it/800/1200?image=1068">
                <img v-img:group-2 src="https://unsplash.it/800/1200?image=1069">
              </div>
            </div>
            <div class="col-md-6">
              <h2>Group 2</h2>
              <div class="well gal">
                <img v-img:group-3 src="https://unsplash.it/800/1200?image=1070">
                <img v-img:group-3 src="https://unsplash.it/800/1200?image=1071">
              </div>
            </div>
          </div>
          <pre><code class="html">
    &lt;img v-img:group-1 src="https://unsplash.it/800/1200?image=1068"&gt;
    &lt;img v-img:group-1 src="https://unsplash.it/800/1200?image=1069"&gt;

    &lt;img v-img:group-2 src="https://unsplash.it/800/1200?image=1070"&gt;
    &lt;img v-img:group-2 src="https://unsplash.it/800/1200?image=1071"&gt;
          </code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1>Custom properties</h1>
          <div class="well gal">
            <img v-img:group-4="{ src: 'https://unsplash.it/800/1200?image=1076' }" src="https://unsplash.it/800/1200?image=1072">
            <img v-img:group-4="{ cursor: 'zoom-in' }" src="https://unsplash.it/800/1200?image=1073">
          </div>
          <pre><code class="html">
    &lt;img v-img:group-3="{ src: 'https://unsplash.it/800/1200?image=1076' }" src="https://unsplash.it/800/1200?image=1072"&gt;
    &lt;img v-img:group-3="{ cursor: 'zoom-in' }" src="https://unsplash.it/800/1200?image=1071"&gt;
          </code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  pre {
    padding: 0;
  }
  .gal {
    display: flex;
    overflow-x: auto;
  }
  .gal img {
    flex-shrink: 0;
    width: 200px;
    height: 300px;
    padding: 5px;
  }
</style>
