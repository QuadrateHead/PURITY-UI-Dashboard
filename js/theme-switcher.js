function themeChange() {
   document.body.classList.toggle("dark");
   if (document.body.classList.contains("dark")){
      localStorage.setItem("myTheme", "darkTheme");
   }else{
      localStorage.removeItem("myTheme");
   }
};