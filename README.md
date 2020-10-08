<h1>Basic's Data Binding</h1>

<h2>Interpolação</h2>
<h4>
  Utilizando o <span>valor</span> do atributo <span>title</span> da classe do
  <span>CounterComponent</span> na tag:
</h4>
<li>Titulo: {{ title }}</li>

<h2>Contador com Interpolação e Event Binding</h2>
<h4>"Contador" está recebendo o <span>value</span> por interpolação</h4>
<h4>
  O <span>Event Binding</span> está declarado no botão como
  <span>(click)</span> que por sua vez chama a função
  <span>increment()</span> da classe
  <span>CounterComponent</span>
</h4>
<li>Contador: {{ value }}</li>
<div class="buttons">
  <button (click)="increment()">Incrementar</button>
  <button (click)="decrement()">Decrementar</button>
  <button (click)="zero()">Zerar</button>
</div>

<h2>Contador com Interpolação, Event Binding e Property Binding</h2>
<h4>
  <span>Property Binding</span> possibilita que possamos colocar expressões JS
  para determinada caracteristica da propriedade. <br />
  Neste caso estamos utilizando a função [disabled] nos botões caso atendam
  determinada condição.
</h4>
<li>Contador: {{ value }}</li>

<div class="buttons">
  <button [disabled]="value >= 10" (click)="increment()">Incrementar</button>
  <button [disabled]="value <= 0" (click)="decrement()">Decrementar</button>
  <button [disabled]="value == 0" (click)="zero()">Zerar</button>
</div>
