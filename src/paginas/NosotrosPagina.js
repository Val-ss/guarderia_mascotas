import React from 'react';
import "../paginas/Nosotros.css";
import HistoriasNosotros from '../componentes/HistoriasNosotros';




export default class NosotrosPagina extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      escondido: true
    }
    this.toggleEsconder = this.toggleEsconder.bind(this);
  }
  
  toggleEsconder(){
    this.setState(prevState => ({
        escondido: !prevState.escondido
    }))
  }
    
  render() {
    return(
      <>

        <div className='container mt-4 pt-4'>
          <div className='pt-4'>
            <h1 className='titulo-nosotros'>Sobre Nosotros</h1>
              <p>Ut tincidunt volutpat leo sed fermentum. Duis eu erat quam.
                Curabitur quis egestas tellus. Proin iaculis leo odio, quis commodo massa 
                vestibulum finibus. Sed fermentum convallis eros, quis suscipit libero 
                venenatis accumsan. In rutrum consectetur aliquet. Sed dolor sem, ultricies
                nec turpis ac, volutpat placerat tellus.
                Donec volutpat vehicula quam, vitae malesuada dui tincidunt ut.
                Nullam vehicula sed tellus in hendrerit.
              </p>
              <p>
                Ut tincidunt volutpat leo sed fermentum. Duis eu erat quam.
                Curabitur quis egestas tellus. Proin iaculis leo odio, quis commodo massa vestibulum finibus. Sed fermentum convallis eros, quis suscipit libero 
                venenatis accumsan. In rutrum consectetur aliquet. Sed dolor sem, ultricies nec turpis ac, 
                volutpat placerat tellus.Donec volutpat vehicula quam, vitae malesuada dui tincidunt ut.Nullam vehicula sed tellus in hendrerit.
                Sed dolor sem, ultricies nec turpis ac, volutpat placerat tellus.Donec volutpat vehicula quam, vitae malesuada dui tincidunt ut.
                Nullam vehicula sed tellus in hendrerit.
              </p>  
            </div>

            <button onClick={this.toggleEsconder} className='btn-custom btn'>
              {this.state.escondido ? 'Mostrar más' : 'Mostrar menos'}
            </button>
              

            <div className={"pt-4 container" + (this.state.escondido ? ' d-none' : '')}>
              <p>
              Vivamus ut luctus erat. Integer ipsum neque, interdum ut congue eu, ultricies vitae elit. Pellentesque
              sapien diam, lacinia quis metus ac, venenatis eleifend leo. Sed vitae condimentum magna. Donec 
              maximus leo sit amet tortor cursus dictum vitae ac dolor. Aenean non tortor accumsan, venenatis augue
              ac, mollis metus. Sed venenatis odio condimentum nulla ultrices tempor. Maecenas nisi sapien, gravida 
              non libero nec, finibus pellentesque nisi. Morbi quam massa, accumsan et malesuada vel, congue quis 
              dolor. Vivamus id odio nec nibh molestie porttitor. Mauris metus sapien, varius vitae imperdiet in, 
              elementum eget neque. Sed gravida convallis maximus. Cras rhoncus, turpis ac eleifend dictum, mauris 
              eros auctor nisl, ac volutpat lectus lacus eget sapien. Pellentesque vitae nisi viverra, bibendum dui 
              ut, varius ipsum.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nibh metus, dictum at aliquam eget, 
              faucibus quis nunc. Aenean mollis ultrices nisi, non vestibulum arcu vulputate nec. Aliquam nunc eros, 
              posuere non metus at, vulputate varius massa. Mauris iaculis euismod est, ac auctor quam consequat eget. 
              Aliquam laoreet urna at quam mattis commodo. Ut lobortis quam magna, at pulvinar quam accumsan ac. Sed at 
              nisl hendrerit, suscipit sem quis, tincidunt ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas eros arcu, maximus vitae convallis id, ultricies vel massa. In at diam sed quam vestibulum placerat.
               Ut eget vehicula massa. Suspendisse volutpat lacus eget justo imperdiet placerat. 
              Suspendisse potenti. Integer eu augue pellentesque, sollicitudin turpis at, feugiat quam. Integer ut augue mi.
              </p>
            </div>

          </div>

        <h4 className='titulo-nosotrosDos mt-5'>Conocé nuestras historias</h4>
        <HistoriasNosotros 
        titulo="Historia de Milo"
        img ="img/perros-nosotros.jpg"
        descripcion ="Donec volutpat vehicula quam,vitae malesuada dui tincidunt ut. Nullam vehicula sed tellus
        in hendrerit.vitae malesuada duitincidunt ut. Nullam vehicula sed tellus in hendrerit. HolaSed dolor sem,
        ultricies nec turpis ac, volutpat placerat tellu.Donec volutpat vehicula quam,vitae malesuada dui tincidunt 
        ut. Nullam vehicula sed tellus in hendrerit.Donec volutpat vehicula quam,vitae malesuada dui tincidunt ut. 
        Nullam vehicula sed tellus in hendrerit.vitae malesuada dui tincidunt ut. Nullam vehicula sed tellus 
        in hendrerit. HolaSeddolor sem, ultricies nec turpis ac, volutpat placerat tellu.Donec volutpat vehicula 
        quam,vitae malesuada dui tincidunt ut. Nullam vehicula sed tellus in hendrerit."/>

        <HistoriasNosotros 
        titulo="Historia de Pepe"
        img ="img/nosotros-pepe.jpg"
        descripcion ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nibh metus, dictum at aliquam eget, faucibus quis nunc. Aenean mollis ultrices nisi, non vestibulum arcu vulputate nec. Aliquam nunc eros, posuere non metus at,
        vulputate varius massa. Mauris iaculis euismod est, ac auctor quam consequat eget. Aliquam laoreet urna at quam mattis commodo. Ut lobortis quam magna, at pulvinar quam accumsan ac. Sed at nisl hendrerit, suscipit sem quis, tincidunt ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eros arcu, maximus vitae convallis id, ultricies vel massa. In at diam sed quam vestibulum placerat. Ut eget vehicula massa. Suspendisse volutpat lacus eget justo imperdiet placerat. 
        Suspendisse potenti. Integer eu augue pellentesque, sollicitudin turpis at, feugiat quam. Integer ut augue mi.."/>

              
      </>   
    )
  }
}