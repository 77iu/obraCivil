<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="button--bg--menu.css" />
    <link rel="stylesheet" href="bloques.css">
    <link rel="stylesheet" href="contenido.css" />
    <link rel="stylesheet" href="headline.css" />
    <link rel="stylesheet" href="cards.css" />
    <link rel="stylesheet" href="footer.css">
    <link rel="stylesheet" href="info.css">
   
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap"
      rel="stylesheet"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Roboto&display=swap"
      rel="stylesheet"
    />
    <title>ObraCivil</title>
  </head>
  <body>
    <button class="button" id="toggleButton"></button>
    <div class="bg--menu" id="bgMenu">
      <div class="bloque--uno">
        <a href="#headline" onclick="remove()">Inicio</a>
        <a href="#experiencia" onclick="remove()">Experiencia Laboral</a>
        <a href="#actualidad" onclick="remove()">Actualidad</a>
        <a href="#" onclick="remove()">Mi información</a>
        <a href="niveles.html" onclick="remove()">Herramientas</a>
        <a href="#" onclick="remove()">Galería</a>
        <a href="#contenido" onclick="remove()">Contenido</a>
      </div>
      <div class="redes--bg">
        <a href="#"><box-icon name='whatsapp' type='logo' ></box-icon></a>
         
          <a href="#"><box-icon name='youtube' type='logo' ></box-icon></a>
          <a href="#"><box-icon type='logo' name='linkedin'></box-icon></a>
          <a href="#"><box-icon name='gmail' type='logo' ></box-icon></a>
         
      </div>
    </div>
    <header>
      <a href="index.html" class="logo"><span>Obra</span><span>Civil</span></a>
      <div class="bloques">
        <nav class="bloque--uno">
          <a href="#headline" onclick="remove()">Inicio</a>
          <a href="#experiencia" onclick="remove()">Experiencia Laboral</a>
          <a href="#actualidad" onclick="remove()">Actualidad</a>
          <a href="#" onclick="remove()">Mi información</a>
          <a href="niveles.html" onclick="remove()">Herramientas</a>
          <a href="#" onclick="remove()">Galería</a>
          <a href="#contenido" onclick="remove()">Contenido</a>
        </nav>
        <nav class="bloque--dos">
          <a href="#"><box-icon color="#00ffff" name='whatsapp' type='logo' ></box-icon></a>
          <a href="niveles.html" class="tt">T</a>
          <a href="#"><box-icon color="#00ffff" name="search"></box-icon></a>
        </nav>
      </div>
    </header>
    <div class="headline" id="headline">
      <!-- <div class="caratulas">
        <p class="caratula-uno">OBRA CIVIL</p>
        <P class="caratula-dos">Explora infinitas posibilidades con HTML y CSS.<br>Encontrar ese estilo que siempre quisiste</P>
        <p class="caratula-tres">Es posible</p>
      </div> -->
    </div>
       <!-- ============================================================================= -->
       <div class="info-cards">
      
          <p>Trabajar en Obra Civil es estar en constante cambio. <br> Las experiencias obtenidas ayudan a realizar
            nuevas actividades de la manera mas positiva. </p>
      </div>
       <!-- ============================================================================= -->
    <div class="cards" id="experiencia">
      <h2 class="visitando" >Experiencia laboral</h2>
      <div class="contenedor">
        <div class="card">
          <img src="images/vale01.jpg" />
          <div class="overlay">
            <h1>Consorcio Río Colorado </h1>
          
          <a href="#" class="verMas" >Ver Más</a>
            <h3>Malargüe - Mendoza</h3>
          </div>
        </div>
        <div class="card">
          <img src="images/alameda_05.jpg" alt="" />
          <div class="overlay">
            <h1>Iglesia de la Alameda</h1>
        
            <a href="#" class="verMas" >Ver Más</a>
            <h3>Ciudad - Mendoza</h3>
          </div>
        </div>

        <div class="card">
          <img src="images/paso_02.jpg" alt="" />
          <div class="overlay">
            <h1>Av. Paso de los Andes</h1>
          
            <a href="#" class="verMas" >Ver Más</a>
            <h3>Godoy Cruz - Mendoza</h3>
          </div>
        </div>

        <div class="card">
          <img src="images/P_Molina_01.jpg" alt="" />
          <div class="overlay">
            <h1>Paseo Pedro Molina</h1>
           
            <a href="#" class="verMas" >Ver Más</a>
            <h3>Ciudad - Mendoza</h3>
          </div>
        </div>

        <div class="card">
          <img src="images/templo_02.jpg" alt="" />
          <div class="overlay">
            <h1>Iglesia de Jesucristo de los Santos de los Últimos Días</h1>
           
            <a href="#" class="verMas" >Ver Más</a>
            <h3>Ciudad - Mendoza</h3>
          </div>
        </div>

        <div class="card">
          <img src="images/zanja01.jpeg" alt="" />
          <div class="overlay">
            <h1>Sistema integral de recolección y tratamiento de efluentes
              cloacales</h1>
            
            <a href="#" class="verMas" >Ver Más</a>
            <h3>Malargüe - Mendoza</h3>
          </div>
        </div>

        <div class="card">
          <img src="images/cuyoil04.jpg" alt="" />
          <div class="overlay">
            <h1>Barrio PROYECTO CUYOIL II</h1>
            <a href="#" class="verMas" >Ver Más</a>
            <h3>Maipú - Mendoza</h3>
          </div>
        </div>

   
      </div>
     <aside id="actualidad">
      <h2>Actualidad</h2>
      <p>En Godoy Cruz - Mendoza, <br>
         Las actividades constan de: 
        </p>
        <ul>
          <li><a href="#">Auditorio</a></li>
          <li><a href="#">Urbanización</a></li>
          <li><a href="#"> Plaza Olmos</a></li>
          <li><a href="#">Plaza zzz</a></li>
          <li><a href="#">Estacionamiento 1</a></li>
          <li><a href="#">Estacionamiento 2</a></li>
        </ul>
      <a href="#" class="verMas">Ver Más</a>
     </aside>
    </div>

    <div class="contenido" id="contenido">
      <div class="nosotros card">
        <h3>Contenido</h3>
        <a href="#experiencia">Experiencia </a>
        <a href="#" class="blue">• Consorcio Río Colorado</a>
        <a href="#" class="blue">• Iglesia de la Alameda</a>
        <a href="#" class="blue">• Av. Paso de los Andes</a>
        <a href="#" class="blue">• Paseo Pedro Molina</a>
        <a href="#" class="blue">• Iglesia de Jesucristo de los Santos de los Últimos Días</a>
        <a href="#" class="blue">• Sistema integral de recolección y tratamiento de efluentes
          cloacales</a>
          <a href="#" class="blue">• Barrio PROYECTO CUYOIL II</a>
      </div>
      <div class="comunicate card">
        
        <a href="#actualidad">Actualidad</a>
        <a href="#">Mi información</a>
        <a href="#">Herramientas</a>
        <a href="niveles.html" class="blue">• Calculador de niveles por distancia</a>
        <a href="#">Galería</a>
      
      </div>
      <div class="redes card">
        <h3>Síguenos</h3>
        <div>
          <a href="#"><box-icon name='whatsapp' type='logo' ></box-icon></a>
       
          <a href="#"><box-icon name='youtube' type='logo' ></box-icon></a>
          <a href="#"><box-icon type='logo' name='linkedin'></box-icon></a>
          <a href="#"><box-icon name='gmail' type='logo' ></box-icon></a>
         
        </div>
      </div>
    </div>
    <footer><p><span>Obra</span><span>Civil</span> creado por Miguel Cortez</p></footer>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <script src="index.js"></script>
  </body>
</html>
