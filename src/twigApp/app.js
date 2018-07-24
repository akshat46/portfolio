module.exports = {
  skills: skills_list(true),
  project_elements: project_elements()
};

function project_elements(){
    var uniride_web = {
        title: "Uniride",
        type: "Web",
        description: "A carpooling web application for students.",
        skills: skills_list(false, ["Ruby", "CSS", "HTML", "JavaScript", "PostgreSQL", "Ruby on Rails"]),
        links: links_list([
          {name: 'github', url: 'https://github.com/148-UniRide/uniride'},
          {name: 'heroku', url: 'https://fathomless-reaches-78358.herokuapp.com/'},
        ]),
    };
    var uniride_android = {
        title: "Uniride",
        type: "Android",
        description: "A carpooling mobile application for students.",
        skills: skills_list(false, ["Java", "Android", "Firebase"]),
        links: links_list([
          {name: 'github', url: 'https://github.com/195-uniride/UniRideAndroid'},
        ]),
    };
    return [uniride_web, uniride_android];
}

function links_list(ls=[]){
  var links = []
  function logo_url(name){
    var url = "../img/links/" + name + "-link.png";
    return url;
  }
  for(var i = 0; i < ls.length; i++){
    var logo_string = ls[i].name.replace(/\s/g, '').toLowerCase();
    var skills_project = {url: ls[i].url, logo: logo_url(logo_string)};
    links.push(skills_project);
  }
  return links;
}

function skills_list(all=false, ls=[]){
  var skills = [];

  function logo_url(name){
    var url = "../img/skills/" + name + ".png";
    return url;
  }

  if(all){
      var languages_name = ["Ruby", "Python", "Java", "JavaScript" ,"CSS", "SASS", "HTML"];
      var databases_name = ["Firebase", "MySQL", "PostgreSQL"];
      var frameworks_name = ["Ruby on Rails", "Django", "Android", "Amazon Web Services", "GitHub", "Heroku"];
      var softwares_name = ["Photoshop", "After Effects"];

      var languages_logo = [logo_url("ruby"), logo_url("python"), logo_url("java"), logo_url("javascript"), logo_url("css"), logo_url("sass"), logo_url("html")];
      var databases_logo = [logo_url("firebase"), logo_url("mysql"), logo_url("postgresql")];
      var frameworks_logo = [logo_url("rubyonrails"), logo_url("django"), logo_url("android"), logo_url("aws"), logo_url("github"), logo_url("heroku")];
      var softwares_logo = [logo_url("photoshop"), logo_url("after-effects")];

      var languages = [];
      for(var i = 0; i < languages_name.length; i++){
        var language = {name: languages_name[i], logo: languages_logo[i]};
        languages.push(language);
      }

      var databases = [];
      for(var i = 0; i < databases_name.length; i++){
        var database = {name: databases_name[i], logo: databases_logo[i]};
        databases.push(database);
      }

      var frameworks = [];
      for(var i = 0; i < frameworks_name.length; i++){
        var framework = {name: frameworks_name[i], logo: frameworks_logo[i]};
        frameworks.push(framework);
      }

      var softwares = [];
      for(var i = 0; i < softwares_name.length; i++){
        var software = {name: softwares_name[i], logo: softwares_logo[i]};
        softwares.push(software);
      }

      skills.push(languages, databases, frameworks, softwares);
      return skills;
  }
  else{
    for(var i = 0; i < ls.length; i++){
      var logo_string = ls[i].replace(/\s/g, '').toLowerCase();
      var skills_project = {name: ls[i], logo: logo_url(logo_string)};
      skills.push(skills_project);
    }
    return skills;
  }
}
