import './livrosPlaceholder.css';
import { useNavigate } from 'react-router-dom';

export function LivroPlaceholder() {
  const navigate = useNavigate();

  return (
    <div className="livro-page">
      <aside className="livro-sidebar">
        <h2 className="livro-titulo">Título do Livro</h2>
        <div className="livro-autor">Autor: Placeholder</div>
        <div className="livro-popularidade">Popularidade: 5</div>
        <div className="livro-quantidade">Disponível: 3</div>
        <button
          className="livro-voltar-btn"
          onClick={() => navigate('/home')}
        >
          Voltar para Home
        </button>
      </aside>
      <main className="livro-conteudo-area">
        <div className="livro-conteudo">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus nisi. Proin mollis eget ante et blandit. Sed ac pulvinar nulla. Suspendisse potenti. Etiam vitae tortor arcu. Cras id blandit diam. Suspendisse sollicitudin quam non velit fringilla luctus.
          </p>
          <p>
            Maecenas volutpat ut mi a maximus. Proin pharetra mi at ipsum tristique, sit amet imperdiet mi facilisis. Donec porta pretium neque quis elementum. Donec ligula libero, hendrerit nec enim at, consequat faucibus purus. Donec mollis iaculis sapien sit amet semper. Praesent auctor, orci non malesuada bibendum, enim odio consequat ligula, at hendrerit felis quam quis odio. Aliquam erat volutpat. Fusce vulputate, dui nec aliquet lacinia, mi justo vehicula mauris, at gravida augue velit viverra nibh. Sed cursus felis imperdiet, aliquet urna et, dapibus odio. Ut scelerisque justo odio, sed tincidunt ligula laoreet sed. Aliquam sit amet odio justo. Quisque ultricies posuere consequat. Mauris iaculis neque eu felis pretium, id accumsan orci consectetur. Vestibulum ac felis quam. Pellentesque rutrum et purus non fringilla.
          </p>
          <p>
            Donec scelerisque dolor dui, at hendrerit lorem aliquet a. Nam rhoncus felis ante, at accumsan elit commodo sit amet. Vivamus turpis erat, accumsan a gravida vitae, posuere eget nunc. Fusce nec posuere ligula. Pellentesque tempor, mauris ac tempor dapibus, nunc elit mollis purus, a fermentum lorem sem a nibh. Nam posuere, neque in elementum porta, tellus justo sagittis orci, ultrices molestie neque leo id augue. Vivamus facilisis lectus et sem aliquam, eu maximus justo semper. Maecenas vel aliquam neque. Sed non condimentum erat, in dignissim tellus.
          </p>
          <p>
            Vestibulum libero justo, tempus quis lobortis et, luctus nec elit. Nam gravida diam sit amet lorem consectetur, vel condimentum eros tincidunt. Donec ullamcorper sem dolor, imperdiet ornare ligula volutpat quis. Quisque sed sem arcu. Nam sit amet cursus eros, ut ultrices tellus. Aliquam erat volutpat. Morbi gravida ex sit amet libero convallis congue. Aliquam id turpis bibendum, fringilla libero quis, dignissim lacus. In nulla justo, tincidunt eget gravida sit amet, vehicula ut ligula. Sed finibus ex ut bibendum vestibulum. Proin sed lorem erat. Proin in venenatis velit. Aliquam rhoncus cursus felis, eget fermentum ligula vestibulum eu. Praesent lacinia gravida est, a cursus mi laoreet eu. Quisque volutpat ligula a ultrices malesuada.
          </p>
          <p>
            Quisque ut diam ipsum. Nunc leo elit, feugiat eu nibh a, faucibus vehicula dui. Mauris porttitor arcu vitae magna pharetra, eu sodales nunc sollicitudin. Sed interdum, leo eu tempus commodo, quam velit dapibus justo, in blandit nisi velit vitae justo. Nulla ut sollicitudin est, eu pulvinar diam. Pellentesque ut dapibus nunc. Phasellus viverra orci ac suscipit porttitor. Donec sit amet malesuada eros, mollis aliquet ipsum. Aenean efficitur lobortis libero, feugiat viverra lacus porta eu. Pellentesque lacus lectus, convallis sit amet hendrerit semper, porta eu diam. Sed condimentum, lacus quis tempor blandit, mi diam suscipit augue, quis finibus odio odio ut diam. Sed gravida eros eget enim convallis tempor. Sed aliquam est ante, id mattis ligula congue eu. Donec et ex et leo bibendum commodo.
          </p>
          <p>
            Aliquam a odio a lectus rutrum lobortis a ut velit. Curabitur rutrum orci sit amet mi iaculis, vitae euismod libero tristique. Mauris facilisis in nunc non pretium. Vestibulum sit amet enim sem. Etiam sed tristique metus. Phasellus eros libero, porttitor ut augue sed, cursus dapibus ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eleifend leo sit amet lacinia tempus. Vivamus tincidunt mi vitae facilisis varius. Integer sollicitudin vitae tellus id mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse semper neque id fringilla porta.
          </p>
          <p>
            Praesent in turpis sed augue ornare faucibus non in ex. Quisque eu mi faucibus, mollis leo ac, tristique urna. Maecenas euismod iaculis vestibulum. Suspendisse potenti. Donec placerat felis ornare, porttitor arcu at, dictum dui. Pellentesque pharetra rhoncus dui. Proin semper efficitur mauris in sodales. Aenean iaculis mi et est tempus fermentum. Integer id justo imperdiet, pharetra sapien sed, sodales diam. Sed mollis mattis semper.
          </p>
          <p>
            Cras sagittis enim et nulla efficitur, eu consectetur nisl fringilla. Nam molestie consectetur ornare. Fusce scelerisque porttitor neque id rutrum. Sed velit massa, posuere ac sodales eu, pharetra ut ex. Curabitur turpis enim, cursus ut sagittis at, dignissim placerat tortor. Curabitur mollis mi neque. Curabitur in mi mauris.
          </p>
          <p>
            Vestibulum arcu lectus, convallis volutpat dolor eget, dignissim pellentesque tellus. Integer pharetra elit et nisi mollis pretium. Vestibulum vestibulum eros consectetur ex sollicitudin tincidunt. Aliquam elementum diam vel mi tempus, at mattis mi scelerisque. Praesent tincidunt sem non nibh vestibulum, at porttitor odio consectetur. Vestibulum tristique posuere tortor, eleifend lobortis risus convallis id. Mauris eu elit ac nibh tempus scelerisque non ut nulla. Donec dui risus, egestas at scelerisque quis, egestas non ligula.
          </p>
          <p>
            Cras convallis bibendum faucibus. Proin vestibulum id sem sit amet luctus. Quisque a urna laoreet, laoreet sem sit amet, tristique dui. Maecenas sit amet euismod sem. Curabitur non feugiat massa. Vestibulum nec pretium velit, ut aliquam dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque mi leo, fringilla a ex interdum, suscipit commodo ex. Fusce hendrerit, velit eu elementum maximus, quam purus dictum diam, eget convallis lacus odio a est. Aenean ultricies, diam mattis elementum blandit, mauris dolor ornare orci, eget fringilla ligula sem a enim.
          </p>
        </div>
      </main>
    </div>
  );
}