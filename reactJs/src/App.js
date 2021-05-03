//import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario.js'
import Navbar from './components/navbar.js'
import Card from './components/Card'
import {Grid} from '@material-ui/core/';
import {makeStyles} from '@material-ui/core/styles';
import C2 from './components/img/E1/E1_C2.jpg';
import C3 from './components/img/E1/E1_C3.jpg';
import C8 from './components/img/E1/E1_C8.jpg';
import C9 from './components/img/E1/E1_C9.jpg';
import C10 from './components/img/E1/E1_C10.jpg';
import C14 from './components/img/E1/E1_C14.jpg';
import C15 from './components/img/E1/E1_C15.jpg';
import C16 from './components/img/E1/E1_C16.jpg';
import C17 from './components/img/E1/E1_C17.jpg';
import Footer from './components/footer.js';

const useStyles = makeStyles({
  gridContainter: {
    paddingLeft: '150px',
    paddingRight: '150px',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      
      <Grid container spacing={4} className={classes.gridContainter}>
        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "02"
          titulo = "'El sí pronuncian y la mano alargan al primero que llega'"
          fecha = "1799"
          cuerpoPrincipal = "Reprende los matrimonios a ciegas, como los de las princesas y camaristas."
          cuerpoSecundario = "Los matrimonios se hacen regularmente a ciegas: las novias adiestradas por sus padres, se enmascaran y atavían lindamente para engañar al primero que llega. Esta es una princesa con máscara, que luego a de ser perra con sus vasallos, como lo indica el reverso de su cara imitando un peinado: el pueblo necio aplaude estos enlaces; y detrás viene orando un embustero en traje sacerdotal por la felicidad de la nación. ( Bodas de las Camaristas)."
          imagen = {C2}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "03"
          titulo = "'Que viene el coco'"
          fecha = "1799"
          cuerpoPrincipal = " Las madres meten miedo a sus hijos con el Coco para hablar con sus amantes."
          cuerpoSecundario = "Goya consideraba un grave error en la educación de los niños el que los padres los asusten con fantasmas y seres que no existen, superstición absurda que luego los va a dominar toda la vida. Según anécdotas de la época, ciertas madres usaban esta estrategia con sus hijos diciendo que viene el coco cuando en realidad era su amante. Así se manifestaba el manuscrito de Ayala y parece confirmarlo el dibujo preparatorio con una expresión emocionada en el rostro de la madre al recibir el coco, una persona de su agrado que no interesa que vean los niños."
          imagen = {C3}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "08"
          titulo = "'¡Que se la llevaron!'"
          fecha = "1799"
          cuerpoPrincipal = " La mujer que no se sabe guardar, es del primero que la pilla"
          cuerpoSecundario = "La mujer que no sabe guardar es del primero que la pilla y cuando no tiene remedio se admiran de que se la llevaron. Un eclesiástico que tiene un amor ilicito, busca un gañán que le ayuda al rapto de su querida."
          imagen = {C8}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "09"
          titulo = "'Tántalo'"
          fecha = "1799"
          cuerpoPrincipal = "Si él fuese más galán, ella reviviría. Esto sucede a los viejos que se casan con las mozas."
          cuerpoSecundario = "Una buena hembra al lado de un viejo que no la satisface, tiene deliquios, y es como el que tiene sed, está junto al agua, y no pude gustarla."
          imagen = {C9}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "10"
          titulo = "'El amor y la muerte'"
          fecha = "1799"
          cuerpoPrincipal = "No conviene sacar la espada muchas veces: los amores exponen a pendencias y desafíos."
          cuerpoSecundario = "Ve aquí un amante de Calderón que por no saberse reír de su competidor muere en brazos de su querida y la pierde por su temeridad. No conviene sacar la espada muy a menudo."
          imagen = {C10}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "14"
          titulo = "'¡Qué sacrificio!'"
          fecha = "1799"
          cuerpoPrincipal = "El vil interés obliga a los padres a sacrificar una hija joven y hermosa casándola con un viejo jorobado, y no falta un cura que apadrine semejantes bodas."
          cuerpoSecundario = " ¡Como ha de ser!. El novio no es de los más apetecibles pero es rico y a costa de la libertad de una niña infeliz se compra el socorro de una familia hambrienta. Así va el mundo."
          imagen = {C14}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "15"
          titulo = "'Bellos consejos'"
          fecha = "1799"
          cuerpoPrincipal = " Desdichado de aquel que cargue con ella."
          cuerpoSecundario = "Los consejos son dignos de quien los da. Lo peor es que la señorita va a seguirlos al pie de la letra.¡Desdichado del que se acerque!"
          imagen = {C15}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "16"
          titulo = "'Dios la perdone. Y era su madre'"
          fecha = "1799"
          cuerpoPrincipal = " Una hija viciosa que se echa a puta, luego no conoce ni aun a su madre que anda tal vez pidiendo limosna."
          cuerpoSecundario = "La señorita salió muy niña de su tierra: hizo su aprendizaje en Cádiz, vino a Madrid: le cayo la lotería. Baja al Prado, oye que una vieja mugrienta y decrepita le pide limosna, ella la despide; insta la vieja: vuelvese la petrimetra y halla- ¿quién lo diría?- que la pobretona es su madre."
          imagen = {C16}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card 
          avatar = "17"
          titulo = "'Bien tirada está'"
          fecha = "1799"
          cuerpoPrincipal = "Oh! la tía Curra no es tonta. Bien sabe ella lo que conviene que las medias vayan bien estiraditas."
          cuerpoSecundario = "Una prostituta se estira la media por enseñar su bella pierna, y no hay cosa más tirada por los suelos que ella. No puede haber cosa más tirada por los suelos que una ramera. Bien sabe la tía Curra lo que conviene estirar las medias."
          imagen = {C17}
          />
        </Grid>
      </Grid>
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
