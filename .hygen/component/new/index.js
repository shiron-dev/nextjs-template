module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic Design category?",
        choices: ["atoms", "molecules", "organisms"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the component name?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory? (No problem in blank)",
      },
      {
        type: "confirm",
        name: "have_props",
        message: "Is it have props?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, name, dir, have_props } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${name}`;
      const abs_path = `src/components/${path}`;
      const alias_path = `@/components/${path}`
      const upper_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      const props = have_props ? "({})" : "()";
      return { ...answers, path, abs_path, alias_path, upper_name };
    });
  },
};
