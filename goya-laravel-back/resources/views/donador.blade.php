

<div>
    <h2> LISTA DE POSIBLES DONADORES </h2>

    @foreach($donadorLista as $donadorPosible)
    {{$donadorPosible[0]->id}} <br/>
    @endforeach
    
</div>

