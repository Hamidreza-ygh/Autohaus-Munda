<template>
  <div class="pageLayout">
    <h2 class="mb-8 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Fahrzeug Verkaufen</h2>
    <FormComponent :data="formData"></FormComponent>
  </div>
</template>


<script>
  import FormComponent from '@/components/FormComponent.vue';
  const age = [...Array(2024).keys()].splice(1990).reverse();
  const pikerlMonat = [...Array(13).keys()].splice(1);

  export default {
    name: 'RequestPage',
    components: { FormComponent, },
    props: [],
    data () {
      return {
        formData: {
          hersteller: [
          "Audi",
          "Alfa-Romeo",
          "BMW",
          "Buick",
          "Cadillac",
          "Chevrolet",
          "Chrysler",
          "Citroen",
          "Corvette",
          "Daewoo",
          "Daihatsu",
          "Dodge",
          "Ferrari",
          "Fiat",
          "Ford",
          "GM",
          "Honda",
          "Hummer",
          "Hyundai",
          "Infiniti",
          "Isuzu",
          "Jaguar",
          "Jeep",
          "Kia",
          "Lamborghini",
          "Lancia",
          "Land Rover",
          "Lexus",
          "Lincoln",
          "Lotus",
          "Maserati",
          "Maybach",
          "Mazda",
          "Mercedes",
          "MG",
          "Mini",
          "Mitsubishi",
          "Nissan",
          "Oldsmobile",
          "Opel",
          "Peugeot",
          "Plymouth",
          "Pontiac",
          "Porsche",
          "Renault",
          "Rolls Royce",
          "Rover",
          "Saab",
          "Seat",
          "Skoda",
          "Smart",
          "Ssangyong",
          "Subaru",
          "Suzuki",
          "Toyota",
          "Triumph",
          "Volvo",
          "Volkswagen",
          ],
          karosserie: [
            "Limousine",
            "Kombi",
            "Cabrio",
            "Coupe",
            "Bus",
            "Geländewagen",
            "Lieferwagen",
            "Sonstiges",
          ],
          kraftstoff: [
            "Diesel",
            "Benzin",
            "Hybrid",
          ],
          // erstzulassung: [
          //   "2023">2023</option>
          //   "2022">2022</option>
          //   "2021">2021</option>
          //   "2020">2020</option>
          //   "2019">2019</option>
          //   "2018">2018</option>
          //   "2017">2017</option>
          //   "2016">2016</option>
          //   "2015">2015</option>
          //   "2014">2014</option>
          //   "2013">2013</option>
          //   "2012">2012</option>
          //   "2011">2011</option>
          //   "2010">2010</option>
          //   "2009">2009</option>
          //   "2008">2008</option>
          //   "2007">2007</option>
          //   "2006">2006</option>
          //   "2005">2005</option>
          //   "2004">2004</option>
          //   "2003">2003</option>
          //   "2002">2002</option>
          //   "2001">2001</option>
          //   "2000">2000</option>
          //   "1999">1999</option>
          //   "1998">1998</option>
          //   "1997">1997</option>
          //   "1996">1996</option>
          //   "1995">1995</option>
          //   "1994">1994</option>
          //   "1993">1993</option>
          //   "1992">1992</option>
          //   "1991">1991</option>
          //   "1990">1990</option>
          // ],
          getriebeart: [
            "Schalter",
            "Automatik"
          ],
          farbe: [
            "Beige",
            "Blau",
            "Braun",
            "Gelb",
            "Gold",
            "Grau",
            "Grausilber",
            "Grün",
            "Hellblau",
            "Hellgrün",
            "Orange",
            "Rot",
            "Schwarz",
            "Silber",
            "Violett",
            "Weiss",
            "Andere Farbe",
          ],
          age:age,
          kmStand: [
            "1.000-20.000",
            "20.000-40.000",
            "40.000-60.000",
            "60.000-80.000",
            "80.000-100.000",
            "100.000-120.000",
            "120.000-140.000",
            "140.000-160.000",
            "160.000-180.000",
            "180.000-200.000",
            "200.000-220.000",
            "220.000-240.000",
            "über 240.000",
          ],
          pikerlMonat: pikerlMonat,
          pikerlJahr: [
            "2027",
            "2026",
            "2025",
            "2024",
            "2023",
            "2022",
            "kein Pickerl",
          ],

        },
        
      };
    },
    emits: [],
    methods: {
    },
  }
</script>