<template>
  <div class="pageLayout">
    <!-- <div class="adventKalender-container">
      <div class="adventKalender__col-1 adventKalender__col-2 adventKalender__item-gap_resp">
        <div class="adventKalender__col-3 adventKalender__item-gap_resp">
          <div class="adventKalender__item adventKalender__item_colSpan-3 adventKalender__item-gap_resp">
            1
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            2
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            3
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            4
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-2 adventKalender__item-gap_resp">
            5
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            6
          </div>
        </div>
        <div class="adventKalender__row-3 adventKalender__item-gap_resp">
          <div class="adventKalender__item adventKalender__item_rowSpan-2 adventKalender__item-gap_resp">
            7
          </div>
          <div class="adventKalender__item adventKalender__item_rowSpan-1 adventKalender__item-gap_resp">
            8
          </div>
          <div class="adventKalender__item_rowSpan-2 adventKalender__item_col-2 adventKalender__item-gap_resp">
            <div class="adventKalender__item adventKalender__item_colSpan-2 adventKalender__item-gap_resp">
              9
            </div>
            <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
              10
            </div>
            <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
              11
            </div>
          </div>
          <div class="adventKalender__item adventKalender__item_rowSpan-1 adventKalender__item-gap_resp">
            12
          </div>
        </div>
        <div class="adventKalender__row-3 adventKalender__item-gap_resp">
          <div class="adventKalender__item_rowSpan-2 adventKalender__item_col-2 adventKalender__item-gap_resp">
            <div class="adventKalender__item adventKalender__item_colSpan-2 adventKalender__item-gap_resp">
              13
            </div>
            <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
              14
            </div>
            <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
              15
            </div>
          </div>
          <div class="adventKalender__item adventKalender__item_rowSpan-1 adventKalender__item-gap_resp">
            16
          </div>
          <div class="adventKalender__item adventKalender__item_rowSpan-2 adventKalender__item-gap_resp">
            7
          </div>
          <div class="adventKalender__item adventKalender__item_rowSpan-1 adventKalender__item-gap_resp">
            8
          </div>
        </div>
        <div class="adventKalender__col-3 adventKalender__item-gap_resp">
          <div class="adventKalender__item adventKalender__item_colSpan-3 adventKalender__item-gap_resp">
            1
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            2
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            3
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            4
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-1 adventKalender__item-gap_resp">
            6
          </div>
          <div class="adventKalender__item adventKalender__item_colSpan-2 adventKalender__item-gap_resp">
            5
          </div>
        </div>
      </div>
    </div> -->
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