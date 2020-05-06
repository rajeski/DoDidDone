/**
 * Building a Simplified Vue Application -
 * Research / Sources (non all-inclusive)...
 * https://vuejs.org/v2/guide/, https://vuejsexamples.com/,
 * https://codeburst.io/build-a-simple-todo-app-with-vue-js-1778ae175514
 *
 **/

/**
 * Model View Component (MVC) Application -
 * https://www.tutorialspoint.com/struts_2/basic_mvc_architecture.htm
 */
let todos = [
  {
    name: "Build a Vue application",
    complete: true,
  },
  {
    name: "Better understand the Command Line",
    complete: false,
  },
  {
    name: "Keep practicing on the CLI",
    complete: false,
  },
];

/**
 * Vue Initialize -
 * https://vuejs.org/v2/guide/instance.html
 */
new Vue({
  /**
   * Use "el" option to load the correct HTML element, i.e., this is commonly referred to as "bootstrapping."
   * https://flaviocopes.com/vue-cheat-sheet/,
   * https://medium.com/better-programming/how-to-use-bootstrap-in-your-vue-js-apps-e655b8b1ef43
   */
  el: `#app`,

  /**
   * Vue Basic Single-file Components -
   * https://vuejs.org/v2/guide/single-file-components.html
   */
  template: "#app-template",

  /**
   * Vue Components Basics -
   * https://vuejs.org/v2/guide/components.html
   */
  data: () => ({
    todos,
    text: ``,
    showComplete: true,
  }),

  /**
   * Vue Computed Properties -
   * https://vuejs.org/v2/guide/computed.html
   */
  computed: {
    /**
     * Vue Filters -
     * https://vuejs.org/v2/guide/filters.html
     */
    filteredTodos() {
      return this.todos.filter((todo) =>
        this.showComplete ? true : !todo.complete
      );
    },

    /**
     * Vue Submit Form -
     * https://vuejs.org/v2/cookbook/form-validation.html
     */
    submitIsDisabled() {
      return this.text == "";
    },
  },

  /**
   * Vue Events and Methods -
   * https://v1.vuejs.org/guide/events.html
   */
  methods: {
    /**
     * Vue Push -
     * https://stackoverflow.com/questions/49774392/vue-push-to-array-on-event
     */
    addTodo() {
      todos.push({
        name: this.text,
        complete: false,
      });

      /**
       * Vue Components -
       * https://forum.vuejs.org/search?q=this.y
       */
      this.text = ``;
    },
  },
});
