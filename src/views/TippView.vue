<template>
  <div class="pageLayout" >
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 dark:text-white">Tipps</h2>
    <div class="mb-8">
      <h3 class="mb-4">Gebrauchtwagen Verkauf Tipps</h3>
      <p class="text-primary">
        Folgende Tipps sollen Ihnen helfen, einen höheren Verkaufspreis zu erzielen:
      </p>
    </div>
    <div class="mb-8">
      <ul style="margin: 0; padding: 1px 0 0px 34px; list-style-type: disc;" class="text-primary">
        <li style="padding-bottom: 12px;">Gebrauchtwagenpreise sind beim <a class="text-primary" target="_blank" href="http://www.oeamtc.at/">ÖAMTC</a> und <a class="text-primary" target="_blank" href="http://www.arboe.at/home">ARBÖ</a> kostenlos erhältlich.</li>
        <li style="padding-bottom: 12px;">Saubere Autos bringen mehr Geld.</li>
        <li style="padding-bottom: 12px;">Halten Sie den Prüfbericht (Pickerl) bereit.</li>
        <li style="padding-bottom: 12px;">Der erste Eindruck sollte stimmen: ansprechende Gegend, sauberes Auto, vernünftig fotografiert.</li>
        <li style="padding-bottom: 12px;">Inserate im Internet sind meist kostenlos, sowie:  <a class="text-primary" target="_blank" href="http://www.willhaben.at">wilhaben.at</a>, <a class="text-primary" target="_blank" href="http://www.gebrauchtwagen.at/">gebrauchtwagen.at</a> und <a target="_blank" href="http://www.car4you.at/Gebrauchtwagen">car4you.at</a>. </li>
        <li style="padding-bottom: 12px;">Probefahrt immer zu zweit.</li>
        <li style="padding-bottom: 12px;">Autoübergabe immer nur gegen Bargeld.</li>
        <li style="padding-bottom: 12px;">
            Geldscheine bei der Bank überprüfen lassen.
            Weitere
            Infos unter <a class="text-primary" target="_blank" href="http://www.oenb.at/de/rund_ums_geld/euro/banknoten/fuehlensehenkippen/fuehlen_-_sehen_-_kippen.jsp">Nationalbank Seite</a>.
        </li>
        <li style="padding-bottom: 5px;">Versicherung nach dem Verkauf informieren.</li>
        <li style="padding-bottom: 5px;">
            Sie können unseren übersichtlichen <a class="text-primary" target="_blank" href="Kfz-Kaufvertrag.pdf">Musterkaufvertrag</a> gerne verwenden.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'TippView',
    components: { },
    props: [],
    emits: [],
    methods: {
    },
  }
</script>

<style scoped >
  @media (max-width: 768px) {
    .adventKalender-container {
      padding-right: 24px;
      padding-left: 24px;
    }
    .adventKalender__item_colSpan-1, .adventKalender__item_colSpan-3, .adventKalender__item_rowSpan-1, .adventKalender__item_colSpan-2{
      height: 108px !important; 
    }
    .adventKalender__item {
      font-size: 36px !important;
      border-radius: 20px !important;
    }
    .adventKalender__item-gap_resp {
      gap: 12px !important;
    }
  }
  .adventKalender__col-1 {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    place-content: center;
    gap: 25px;
  }
  
  @media (min-width: 640px) {
    .adventKalender__col-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      place-content: center;
      gap: 25px;
    }
  }
  .adventKalender__col-3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-items: center;
    gap: 25px;
  }
  .adventKalender__row-3 {
    display: grid;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 25px;
  }
  .adventKalender__item {
    width: 100%;
    padding: 0.75rem 1.25rem;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 95px;
    line-height: 130%;
    text-align: center;
    color:#204251;
    background-color: #A6B3B9;

    border-radius: 50px;
  }
  .adventKalender__item_colSpan-3 {
    display: grid;
    grid-column: span 3 / span 3;
    place-content: center;
    height: 203px; 
    gap: 25px;
  }
  .adventKalender__item_colSpan-2 {
    display: grid;
    grid-column: span 2 / span 2;
    place-content: center;
    height: 203px; 
    gap: 25px;
  }
  .adventKalender__item_colSpan-1 {
    display: grid;
    place-content: center;
    height: 203px; 
    gap: 25px;
  }
  .adventKalender__item_rowSpan-3 {
    display: grid;
    grid-row: span 3 / span 3;
    place-content: center;
    height: 203px; 
    gap: 25px;
  }
  .adventKalender__item_rowSpan-2 {
    display: grid;
    grid-row: span 2 / span 2;
    place-content: center;
    
    gap: 25px;
  }
  .adventKalender__item_rowSpan-1 {
    display: grid;
    place-content: center;
    height: 203px;
    gap: 25px;
  }
  .adventKalender__item_col-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      place-content: center;
      
    }

</style>