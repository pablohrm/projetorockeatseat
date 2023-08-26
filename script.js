function toggleMode() {
  const html = document.documentElement /*sempre utilizado para acessar HTML*/

  /*  if (html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } 
  isso acima pode ser feito da seguinte maneira*/

  html.classList.toggle("light")
}
