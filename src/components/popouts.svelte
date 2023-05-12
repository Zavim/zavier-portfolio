<script>
  let showAbout = false;
  let showExp = false;
</script>

{#if showAbout}
  <div class="about-container">
    <div class="close-container">
      <button on:click={() => (showAbout = false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="hsl(331, 80%, 60%)"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 16 12"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div class="about-content">
      <h1>About Zavier</h1>
      <ul>
        <li>I am a web engineer from Cleveland, Ohio!</li>
        <li>
          I leverage my fine arts background to create attractive and responsive
          UIs with React and TypeScript.
        </li>
        <li>
          In my free time I enjoy reading about cutting edge web tech and
          browser-based 3D graphics.
        </li>
        <li>I would love to release a video game one day.</li>
        <li>
          Feel free to <a
            href="mailto:zavier.mclean@tutanota.com"
            target="_blank"
            rel="noreferrer"
            class="link"
            style="margin-bottom: 1rem;"
          >
            <span style="font-family: 'vulf mono regular'">contact me!</span>
          </a>
        </li>
      </ul>

      <h1>Skills</h1>
      <ul class="skills-list">
        <li>JavaScript/TypeScript</li>
        <li>React, Svelte, HTML, CSS</li>
        <li>Consuming REST API data</li>
        <li>WebGL</li>
        <li>Vite</li>
        <li>Vercel</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Git</li>
        <li>Linux + command line</li>
      </ul>
    </div>
    <div class="learning-content">
      <h1>Currently Learning</h1>
      <div class="learning-list">
        <a
          href="https://www.blockbench.net/"
          target="_blank"
          rel="noreferrer"
          class="link">3D Modeling</a
        >
        <a
          href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
          target="_blank"
          rel="noreferrer"
          class="link">react-three-fiber</a
        >
        <a
          href="https://dragonruby.org/"
          target="_blank"
          rel="noreferrer"
          class="link">Ruby</a
        >
        <a
          href="https://threejs.org/"
          target="_blank"
          rel="noreferrer"
          class="link">three.js</a
        >
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
          class="link">TypeScript</a
        >
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
          target="_blank"
          rel="noreferrer"
          class="link">PWAs</a
        >
        <a
          href="https://www.spacemacs.org/#"
          target="_blank"
          rel="noreferrer"
          class="link">Spacemacs</a
        >
      </div>
    </div>
  </div>
{/if}

{#if showExp}
  <div class="experience-container">
    <div class="close-container">
      <button on:click={() => (showExp = false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="hsl(331, 80%, 60%)"
          width="1.25em"
          height="1.25em"
          viewBox="0 0 16 12"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
    <div class="projects-content">
      <h1>Work Experience</h1>
      <h2>Limelight Panels</h2>
      <a
        href="https://limelightcal.com/tremont/zinnia"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/rooms.jpg"
          alt="screenshot of limelight booking website"
        />
      </a>
      <ul class="experience-list">
        <li>
          Created limelightcal.com, a React webapp that syncs Cobot room
          bookings with Google Calendars at
          <a href="https://limelightwork.com/" target="_blank" rel="noreferrer"
            ><em>Limelight</em></a
          > locations
        </li>
        <li><em>Built with Astro + React</em></li>
      </ul>
      <hr />
      <h2>feverdream</h2>
      <a
        href="https://fever-dream.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/feverdream.jpg"
          alt="screenshot of feverdream website"
        />
      </a>
      <ul class="experience-list">
        <li>
          Created a website prototype for the artist residency program at
          Electric Gardens
        </li>
        <li>Adapted a Figma design to be responsive on desktop and mobile</li>
        <li><em>Built with Astro + React</em></li>
        <li>
          Helped create AI generated homepage video
          <br />
          <br />
          <em>Tensorflow + Python</em>
        </li>
      </ul>
      <hr />
      <h2>Acme Ballast Calculator</h2>
      <ul class="experience-list">
        <li>
          Created a Python program that calculates minimum required ballast for
          solar panel arrays
        </li>
        <li>Created an exe with a simple UI for Windows</li>
        <li><em>Built with matplotlib, and shapely + decartes</em></li>
      </ul>
    </div>
  </div>
{/if}

<ul class="button-list">
  <li><button on:click={() => (showAbout = !showAbout)}>about</button></li>
  <li><button on:click={() => (showExp = !showExp)}>experience</button></li>
  <li>
    <a
      href="https://github.com/Zavim"
      target="_blank"
      rel="noreferrer"
      class="link"
    >
      <svg
        viewBox="0 0 24 20"
        width="1.2em"
        height="1.2em"
        color="hsl(331, 80%, 60%)"
      >
        <desc>GitHub logo</desc>
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
    0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
    5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
    5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42
    3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </svg>
    </a>
  </li>
</ul>

<style>
  @font-face {
    font-family: "vulf mono italic";
    src: url("../../fonts/mono/Vulf_Mono-Italic_web.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "vulf mono regular";
    src: url("../../fonts/mono/Vulf_Mono-Regular_web.ttf") format("truetype");
    font-display: swap;
  }
  a {
    color: hsl(331, 60%, 40%);
    text-decoration: none;
  }
  h1 {
    font-size: 28px;
    padding: 0 0 0.5rem;
  }
  h2 {
    padding-bottom: 0;
  }
  .about-container {
    top: -30vh;
    left: -20vw;
    height: 50vh;
    padding: 0 5vw;
    max-width: 30rem;
    z-index: 200;
  }
  .skills-list > li {
    padding: 0.5rem 0 0;
  }
  .learning-list {
    line-height: 1.5;
    font-family: "vulf mono regular";
  }
  .learning-list > a {
    margin-top: 6px;
  }
  .experience-container {
    top: -35vh;
    right: -22vw;
    max-height: 80vh;
    max-width: 45rem;
    z-index: 300;
    border-left: solid 1px hsl(331, 98%, 80%);
  }
  .about-container,
  .experience-container {
    position: absolute;
    overflow-y: scroll;
    scrollbar-color: hsl(331, 80%, 60%) transparent;
    background-color: hsl(60, 100%, 94%);
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0.25rem 0.25rem hsl(331, 60%, 40%);
  }
  .about-content {
    padding-bottom: 1rem;
  }
  .about-content,
  .learning-content,
  .projects-content {
    margin: auto;
    word-break: break-word;
  }
  .projects-content h2 {
    padding-top: 2rem;
  }
  .close-container {
    left: 92%;
    position: sticky;
    top: 0;
    width: 2rem;
    background-color: hsl(60, 100%, 94%);
  }
  .close-container > button {
    position: absolute;
    background-color: hsl(60, 100%, 94%);
    border-radius: 5px;
    padding: 0 0.25em 0;
  }
  .button-list {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding-bottom: 2rem;
  }
  .button-list > li {
    padding: 0 1rem;
  }
  ul {
    padding: 0 0rem 1rem;
  }
  li {
    padding: 1rem 0;
    list-style: none;
    font-family: "vulf mono regular";
  }
  .experience-list {
    padding: 0 1rem 1rem;
  }
  .experience-list > li {
    list-style-type: disc;
  }
  .experience-list > li::marker {
    color: hsl(331, 80%, 60%);
  }
  hr {
    color: hsl(331, 80%, 60%);
  }
  .link {
    text-decoration: none;
    display: inline-block;
    color: hsl(0, 0%, 0%);
    border-radius: 5px;
    box-shadow: 4px 4px hsl(331, 80%, 60%);
    padding: 0.25em 0.5em;
    transition: transform 0.1s ease-out;
  }
  button {
    border: none;
    background-color: transparent;
    font-family: "vulf mono italic";
    font-size: 0.9rem;
    border-radius: 5px;
    box-shadow: 4px 4px hsl(331, 80%, 60%);
    padding: 0.25em 0.5em;
    transition: transform 0.1s ease-out;
  }
  button:hover,
  .link:hover {
    /* border: 1px hsl(331, 80%, 60%);
    border-radius: 5px; */
    background-color: hsl(27, 100%, 94%);
    transform: translate(4px, 4px);
    outline: 1px solid hsl(331, 80%, 60%);
    /* box-shadow: 1px 1px hsl(331, 80%, 60%); */
    box-shadow: none;
  }
  button:active,
  .link:active {
    color: hsl(0, 0%, 100%);
    background-color: hsl(331, 80%, 60%);
    box-shadow: none;
    transform: translate(4px, 4px);
  }
  a > img:hover {
    outline: 3px solid hsl(331, 80%, 60%);
  }
  .close-container > button {
    font-size: 1rem;
  }
  .close-container > button:active {
    background-color: hsl(60, 100%, 94%);
  }

  @media (max-width: 35em) {
    .about-container {
      /* max-width: 10rem; */
      top: -60%;
      left: 0;
      height: 55vh;
    }
    .experience-container {
      position: absolute;
      max-width: 20rem;
      height: 70vh;
      top: -95%;
      right: 0;
      border-left: none;
      border-top: solid 1px hsl(331, 98%, 80%);
    }
    .about-content > ul > li,
    .projects-content > ul > li {
      line-height: 1.75rem;
    }
    .close-container {
      left: 95%;
      position: sticky;
      top: 95%;
    }
    .close-container > button {
      position: relative;
    }
    button {
      font-size: 0.74rem;
    }
  }
</style>
