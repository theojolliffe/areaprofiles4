<script>
  import DataSection from './DataSection.svelte';

  export let place;
</script>
<style>
    div {
        color: #aaa;
    }
</style>
<section class="mb-12" id="population">
    <header>
        <h2 class="text-2xl font-bold">Population</h2>
    </header>

    <DataSection section={"population"} {place}></DataSection>
    <DataSection section={"age"} {place}></DataSection>

    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Age structure</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 0 to 4</td>
                    <td class="p-0 td-number">3,318,449</td>
                    <td class="p-0 td-number">6.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 5 to 7</td>
                    <td class="p-0 td-number">1,827,610</td>
                    <td class="p-0 td-number">3.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 8 to 9</td>
                    <td class="p-0 td-number">1,145,022</td>
                    <td class="p-0 td-number">2.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 10 to 14</td>
                    <td class="p-0 td-number">3,080,929</td>
                    <td class="p-0 td-number">5.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 15</td>
                    <td class="p-0 td-number">650,826</td>
                    <td class="p-0 td-number">1.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 16 to 17</td>
                    <td class="p-0 td-number">1,314,124</td>
                    <td class="p-0 td-number">2.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 18 to 19</td>
                    <td class="p-0 td-number">1,375,315</td>
                    <td class="p-0 td-number">2.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 20 to 24</td>
                    <td class="p-0 td-number">3,595,321</td>
                    <td class="p-0 td-number">6.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 25 to 29</td>
                    <td class="p-0 td-number">3,650,881</td>
                    <td class="p-0 td-number">6.9</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 30 to 44</td>
                    <td class="p-0 td-number">10,944,271</td>
                    <td class="p-0 td-number">0.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 45 to 59</td>
                    <td class="p-0 td-number">10,276,902</td>
                    <td class="p-0 td-number">9.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 60 to 64</td>
                    <td class="p-0 td-number">3,172,277</td>
                    <td class="p-0 td-number">6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 65 to 74</td>
                    <td class="p-0 td-number">4,552,283</td>
                    <td class="p-0 td-number">8.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 75 to 84</td>
                    <td class="p-0 td-number">2,928,118</td>
                    <td class="p-0 td-number">5.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 85 to 89</td>
                    <td class="p-0 td-number">776,311</td>
                    <td class="p-0 td-number">1.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Age 90 and over</td>
                    <td class="p-0 td-number">403,817</td>
                    <td class="p-0 td-number">0.8</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Ethnic group</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">White
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">45,281,142</td>
                    <td class="p-0 td-number">85.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">English/Welsh/Scottish/Northern Irish/British</td>
                    <td class="p-0 td-number">42,279,236</td>
                    <td class="p-0 td-number">79.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Irish</td>
                    <td class="p-0 td-number">517,001</td>
                    <td class="p-0 td-number">1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Gypsy or Irish Traveller</td>
                    <td class="p-0 td-number">54,895</td>
                    <td class="p-0 td-number">0.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other White</td>
                    <td class="p-0 td-number">2,430,010</td>
                    <td class="p-0 td-number">4.6</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Mixed/multiple ethnic groups
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">1,192,879</td>
                    <td class="p-0 td-number">2.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Mixed/multiple ethnic groups</td>
                    <td class="p-0 td-number">1,192,879</td>
                    <td class="p-0 td-number">2.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">White and Black Caribbean</td>
                    <td class="p-0 td-number">415,616</td>
                    <td class="p-0 td-number">0.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">White and Black African</td>
                    <td class="p-0 td-number">161,550</td>
                    <td class="p-0 td-number">0.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">White and Asian</td>
                    <td class="p-0 td-number">332,708</td>
                    <td class="p-0 td-number">0.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other Mixed</td>
                    <td class="p-0 td-number">283,005</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Asian/Asian British
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">4,143,403</td>
                    <td class="p-0 td-number">7.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Indian</td>
                    <td class="p-0 td-number">1,395,702</td>
                    <td class="p-0 td-number">2.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Pakistani</td>
                    <td class="p-0 td-number">1,112,282</td>
                    <td class="p-0 td-number">2.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Bangladeshi</td>
                    <td class="p-0 td-number">436,514</td>
                    <td class="p-0 td-number">0.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Chinese</td>
                    <td class="p-0 td-number">379,503</td>
                    <td class="p-0 td-number">0.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other Asian</td>
                    <td class="p-0 td-number">819,402</td>
                    <td class="p-0 td-number">1.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Black/African/Caribbean/Black British
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">1,846,614</td>
                    <td class="p-0 td-number">3.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">African</td>
                    <td class="p-0 td-number">977,741</td>
                    <td class="p-0 td-number">1.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Caribbean</td>
                    <td class="p-0 td-number">591,016</td>
                    <td class="p-0 td-number">1.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other Black</td>
                    <td class="p-0 td-number">277,857</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Other ethnic group
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">548,418</td>
                    <td class="p-0 td-number">1</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Arab
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">220,985</td>
                    <td class="p-0 td-number">0.4</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Any other ethnic group
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">327,433</td>
                    <td class="p-0 td-number">0.6</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Religion</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Has religion
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">3,318,449</td>
                    <td class="p-0 td-number">68.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Christian</td>
                    <td class="p-0 td-number">1,827,610</td>
                    <td class="p-0 td-number">59.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Buddhist</td>
                    <td class="p-0 td-number">1,145,022</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Hindu</td>
                    <td class="p-0 td-number">3,080,929</td>
                    <td class="p-0 td-number">1.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Jewish</td>
                    <td class="p-0 td-number">650,826</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Muslim</td>
                    <td class="p-0 td-number">1,314,124</td>
                    <td class="p-0 td-number">5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Sikh</td>
                    <td class="p-0 td-number">1,375,315</td>
                    <td class="p-0 td-number">0.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other religion</td>
                    <td class="p-0 td-number">3,595,321</td>
                    <td class="p-0 td-number">0.4</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">No religion
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">3,650,881</td>
                    <td class="p-0 td-number">24.7</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Religion not stated
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">10,944,271</td>
                    <td class="p-0 td-number">7.2</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <a class="text-base icon-arrow p-3 pl-2 border border-nightBlue border-opacity-30  leading-none" href="#top">Back to top</a>
</section>
<section class="mb-12" id="households">
    <header>
        <h2 class="text-2xl font-bold">Households</h2>
    </header>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Resident population</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All households
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">22,063,368</td>
                    <td class="p-0 td-object"/></tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">One person household
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">6,666,493</td>
                    <td class="p-0 td-number">30.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Aged 65 and over</td>
                    <td class="p-0 td-number">2,725,596</td>
                    <td class="p-0 td-number">12.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other</td>
                    <td class="p-0 td-number">3,940,897</td>
                    <td class="p-0 td-number">17.9</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">One family household
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">13,631,182</td>
                    <td class="p-0 td-number">61.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">All aged 65 and over</td>
                    <td class="p-0 td-number">1,789,465</td>
                    <td class="p-0 td-number">8.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Married or same-sex civil partnership couple</td>
                    <td class="p-0 td-number">7,329,455</td>
                    <td class="p-0 td-number">33.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">No children</td>
                    <td class="p-0 td-number">2,719,210</td>
                    <td class="p-0 td-number">12.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Dependent children</td>
                    <td class="p-0 td-number">3,375,890</td>
                    <td class="p-0 td-number">15.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">All children non-dependent</td>
                    <td class="p-0 td-number">1,234,355</td>
                    <td class="p-0 td-number">5.6</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Cohabiting couple
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">2,172,438</td>
                    <td class="p-0 td-number">9.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">No children</td>
                    <td class="p-0 td-number">1,173,172</td>
                    <td class="p-0 td-number">5.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Dependent children</td>
                    <td class="p-0 td-number">890,780</td>
                    <td class="p-0 td-number">4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">All children non-dependent</td>
                    <td class="p-0 td-number">108,486</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Lone parent
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">2,339,824</td>
                    <td class="p-0 td-number">10.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Dependent children</td>
                    <td class="p-0 td-number">1,573,255</td>
                    <td class="p-0 td-number">7.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">All children non-dependent</td>
                    <td class="p-0 td-number">766,569</td>
                    <td class="p-0 td-number">3.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Other household types
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">1,765,693</td>
                    <td class="p-0 td-number">8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">With dependent children</td>
                    <td class="p-0 td-number">584,016</td>
                    <td class="p-0 td-number">2.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">All full-time students</td>
                    <td class="p-0 td-number">124,285</td>
                    <td class="p-0 td-number">0.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">All aged 65 and over</td>
                    <td class="p-0 td-number">61,715</td>
                    <td class="p-0 td-number">0.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other</td>
                    <td class="p-0 td-number">995,677</td>
                    <td class="p-0 td-number">4.5</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Resident population</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All usual residents aged 16 and over in households
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">53,012,456</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Living in a couple</td>
                    <td class="p-0 td-number">24,321,304</td>
                    <td class="p-0 td-number">57.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Married or in a registered same-sex civil partnership</td>
                    <td class="p-0 td-number">19,296,455</td>
                    <td class="p-0 td-number">45.9</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Cohabiting</td>
                    <td class="p-0 td-number">5,024,849</td>
                    <td class="p-0 td-number">11.9</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Not living in a couple</td>
                    <td class="p-0 td-number">17,756,052</td>
                    <td class="p-0 td-number">42.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Single (never married or never registered a same-sex civil partnership)</td>
                    <td class="p-0 td-number">10,862,019</td>
                    <td class="p-0 td-number">25.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Married or in a registered same-sex civil partnership</td>
                    <td class="p-0 td-number">613,991</td>
                    <td class="p-0 td-number">1.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Separated (but still legally married or still legally in a same-sex civil partnership)</td>
                    <td class="p-0 td-number">898,194</td>
                    <td class="p-0 td-number">2.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Divorced or formerly in a same-sex civil partnership which is now legally dissolved</td>
                    <td class="p-0 td-number">2,745,873</td>
                    <td class="p-0 td-number">6.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Widowed or surviving partner from a same-sex civil partnership</td>
                    <td class="p-0 td-number">2,635,975</td>
                    <td class="p-0 td-number">6.3</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Marital and civil partnership status</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All usual residents aged 16+
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">42,989,620</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Single (never married or never registered a same-sex civil partnership)</td>
                    <td class="p-0 td-number">14,889,928</td>
                    <td class="p-0 td-number">46.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Married</td>
                    <td class="p-0 td-number">20,029,369</td>
                    <td class="p-0 td-number">0.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">In a registered same-sex civil partnership</td>
                    <td class="p-0 td-number">100,288</td>
                    <td class="p-0 td-number">2.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Separated (but still legally married or still legally in a same-sex civil partnership)</td>
                    <td class="p-0 td-number">1,141,196</td>
                    <td class="p-0 td-number">9</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Divorced or formerly in a same-sex civil partnership which is now legally dissolved</td>
                    <td class="p-0 td-number">3,857,137</td>
                    <td class="p-0 td-number">6.9</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Widowed or surviving partner from a same-sex civil partnership</td>
                    <td class="p-0 td-number">2,971,702</td>
                    <td class="p-0 td-number">6.9</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <a class="text-base icon-arrow p-3 pl-2 border border-nightBlue border-opacity-30  leading-none" href="#top">Back to top</a>
</section>
<section class="mb-12" id="housing">
    <header>
        <h2 class="text-2xl font-bold">Housing</h2>
    </header>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Resident population</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All dwelling types
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">22,976,066</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Unshared dwelling</td>
                    <td class="p-0 td-number">6,666,493</td>
                    <td class="p-0 td-number">30.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Shared dwelling: Two household spaces</td>
                    <td class="p-0 td-number">2,725,596</td>
                    <td class="p-0 td-number">12.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Shared dwelling: Three or more household spaces</td>
                    <td class="p-0 td-number">3,940,897</td>
                    <td class="p-0 td-number">17.9</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Household spaces
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">13,631,182</td>
                    <td class="p-0 td-number">61.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Household spaces with at least one usual resident</td>
                    <td class="p-0 td-number">1,789,465</td>
                    <td class="p-0 td-number">8.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Household spaces with no usual residents</td>
                    <td class="p-0 td-number">7,329,455</td>
                    <td class="p-0 td-number">33.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Whole house or bungalow: Detached</td>
                    <td class="p-0 td-number">2,719,210</td>
                    <td class="p-0 td-number">12.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Whole house or bungalow: Semi-detached</td>
                    <td class="p-0 td-number">3,375,890</td>
                    <td class="p-0 td-number">15.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Whole house or bungalow: Terraced (including end-terrace)</td>
                    <td class="p-0 td-number">1,234,355</td>
                    <td class="p-0 td-number">5.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Flat, maisonette or apartment: Purpose-built block of flats or tenement</td>
                    <td class="p-0 td-number">2,172,438</td>
                    <td class="p-0 td-number">9.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Flat, maisonette or apartment: Part of a converted or shared house (including bed-sits)</td>
                    <td class="p-0 td-number">1,173,172</td>
                    <td class="p-0 td-number">5.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Flat, maisonette or apartment: In a commercial building</td>
                    <td class="p-0 td-number">890,780</td>
                    <td class="p-0 td-number">4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Caravan or other mobile or temporary structure</td>
                    <td class="p-0 td-number">108,486</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Tenure</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All households
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">22,063,368</td>
                    <td class="p-0 td-object"/></tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Owned
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">13,975,024</td>
                    <td class="p-0 td-number">63.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Owned outright</td>
                    <td class="p-0 td-number">6,745,584</td>
                    <td class="p-0 td-number">30.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Owned with a mortgage or loan</td>
                    <td class="p-0 td-number">7,229,440</td>
                    <td class="p-0 td-number">32.8</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Shared ownership (part owned and part rented)
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">173,760</td>
                    <td class="p-0 td-number">0.8</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Social rented
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">3,903,550</td>
                    <td class="p-0 td-number">17.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Rented from council (Local Authority)</td>
                    <td class="p-0 td-number">2,079,778</td>
                    <td class="p-0 td-number">9.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other</td>
                    <td class="p-0 td-number">1,823,772</td>
                    <td class="p-0 td-number">8.3</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">Private rented
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">3,715,924</td>
                    <td class="p-0 td-number">16.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Private landlord or letting agency</td>
                    <td class="p-0 td-number">3,401,675</td>
                    <td class="p-0 td-number">15.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other</td>
                    <td class="p-0 td-number">314,249</td>
                    <td class="p-0 td-number">1.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Living rent free</td>
                    <td class="p-0 td-number">295,110</td>
                    <td class="p-0 td-number">1.3</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Rooms, bedrooms and central heating</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All households
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">22,063,368</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Does not have central heating</td>
                    <td class="p-0 td-number">594,561</td>
                    <td class="p-0 td-number">2.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Does have central heating</td>
                    <td class="p-0 td-number">21,468,807</td>
                    <td class="p-0 td-number">97.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Occupancy rating (rooms) of -1 or less</td>
                    <td class="p-0 td-number">1,928,596</td>
                    <td class="p-0 td-number">8.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Occupancy rating (bedrooms) of -1 or less</td>
                    <td class="p-0 td-number">1,024,473</td>
                    <td class="p-0 td-number">4.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Average household size</td>
                    <td class="p-0 td-number">2</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Average number of rooms per household</td>
                    <td class="p-0 td-number">5</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Average number of bedrooms per household</td>
                    <td class="p-0 td-number">3</td>
                    <td class="p-0 td-object"/></tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <a class="text-base icon-arrow p-3 pl-2 border border-nightBlue border-opacity-30  leading-none" href="#top">Back to top</a>
</section>
<section class="mb-12" id="economic-activity">
    <header>
        <h2 class="text-2xl font-bold">Economic Activity</h2>
    </header>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Economic activity - All usual residents</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All usual residents aged 16 to 74
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">38,881,374</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Economically active</td>
                    <td class="p-0 td-number">27,183,134</td>
                    <td class="p-0 td-number">69.9</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">In employment</td>
                    <td class="p-0 td-number">24,143,464</td>
                    <td class="p-0 td-number">62.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Employee: Part-time</td>
                    <td class="p-0 td-number">5,333,268</td>
                    <td class="p-0 td-number">13.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Employee: Full-time</td>
                    <td class="p-0 td-number">15,016,564</td>
                    <td class="p-0 td-number">38.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Self-employed</td>
                    <td class="p-0 td-number">3,793,632</td>
                    <td class="p-0 td-number">9.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Unemployed</td>
                    <td class="p-0 td-number">1,702,847</td>
                    <td class="p-0 td-number">4.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Full-time student</td>
                    <td class="p-0 td-number">1,336,823</td>
                    <td class="p-0 td-number">3.4</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Economically Inactive</td>
                    <td class="p-0 td-number">11,698,240</td>
                    <td class="p-0 td-number">30.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Retired</td>
                    <td class="p-0 td-number">5,320,691</td>
                    <td class="p-0 td-number">13.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Student (including full-time students)</td>
                    <td class="p-0 td-number">2,255,831</td>
                    <td class="p-0 td-number">5.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Looking after home or family</td>
                    <td class="p-0 td-number">1,695,134</td>
                    <td class="p-0 td-number">4.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Long-term sick or disabled</td>
                    <td class="p-0 td-number">1,574,134</td>
                    <td class="p-0 td-number">4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other</td>
                    <td class="p-0 td-number">852,450</td>
                    <td class="p-0 td-number">2.2</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Unemployed: Age 16 to 24</td>
                    <td class="p-0 td-number">471,666</td>
                    <td class="p-0 td-number">1.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Unemployed: Age 50 to 74</td>
                    <td class="p-0 td-number">315,863</td>
                    <td class="p-0 td-number">0.8</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Unemployed: Never worked</td>
                    <td class="p-0 td-number">276,121</td>
                    <td class="p-0 td-number">0.7</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Long-term unemployed</td>
                    <td class="p-0 td-number">668,496</td>
                    <td class="p-0 td-number">1.7</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <a class="text-base icon-arrow p-3 pl-2 border border-nightBlue border-opacity-30  leading-none" href="#top">Back to top</a>
</section>
<section class="mb-12" id="education">
    <header>
        <h2 class="text-2xl font-bold">Education</h2>
    </header>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Qualifications and students</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All usual residents aged 16 and over
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">42,989,620</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">No qualifications,</td>
                    <td class="p-0 td-number">27,183,134</td>
                    <td class="p-0 td-number">22.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Level 1 qualifications,</td>
                    <td class="p-0 td-number">24,143,464</td>
                    <td class="p-0 td-number">13.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Level 2 qualifications,</td>
                    <td class="p-0 td-number">5,333,268</td>
                    <td class="p-0 td-number">15.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Apprenticeship,</td>
                    <td class="p-0 td-number">15,016,564</td>
                    <td class="p-0 td-number">3.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Level 3 qualifications,</td>
                    <td class="p-0 td-number">3,793,632</td>
                    <td class="p-0 td-number">12.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Level 4 qualifications and above,</td>
                    <td class="p-0 td-number">1,702,847</td>
                    <td class="p-0 td-number">27.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Other qualifications,</td>
                    <td class="p-0 td-number">1,336,823</td>
                    <td class="p-0 td-number">5.7</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Schoolchildren and full-time students: Age 16 to 17</td>
                    <td class="p-0 td-number">11,698,240</td>
                    <td class="p-0 td-number">2.7</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Schoolchildren and full-time students: Age 18 and over</td>
                    <td class="p-0 td-number">5,320,691</td>
                    <td class="p-0 td-number">5.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Full-time students: Age 18 to 74: Economically active: In employment</td>
                    <td class="p-0 td-number">2,255,831</td>
                    <td class="p-0 td-number">1.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Full-time students: Age 18 to 74: Economically active: Unemployed</td>
                    <td class="p-0 td-number">1,695,134</td>
                    <td class="p-0 td-number">0.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Full-time students: Age 18 to 74: Economically inactive</td>
                    <td class="p-0 td-number">1,574,134</td>
                    <td class="p-0 td-number">3.1</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <a class="text-base icon-arrow p-3 pl-2 border border-nightBlue border-opacity-30  leading-none" href="#top">Back to top</a>
</section>
<section class="mb-12" id="health">
    <header>
        <h2 class="text-2xl font-bold">Health</h2>
    </header>
    <div class="mb-8">
        <table class="mb-4 border-b-2 table-auto text-base leading-loose">
            <thead class="border-grey1 border-b-2">
                <tr>
                    <th scope="col" class="h-12 text-left font-bold">Health and provision of unpaid Care</th>
                    <th scope="col" class="h-12 text-right font-normal">Count</th>
                    <th scope="col" class="h-12 text-right font-normal" style="width: 10%">%</th>
                </tr>
            </thead>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey1 font-bold border-b">
                    <th scope="row" class="h-9 p-0 text-left font-bold">All usual residents
                        
                    
                        
                            </th>
                    <td class="p-0 td-number">53,012,456</td>
                    <td class="p-0 td-object"/></tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Day-to-day activities limited a lot</td>
                    <td class="p-0 td-number">4,405,394</td>
                    <td class="p-0 td-number">8.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Day-to-day activities limited a little</td>
                    <td class="p-0 td-number">4,947,192</td>
                    <td class="p-0 td-number">9.3</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Day-to-day activities not limited</td>
                    <td class="p-0 td-number">43,659,870</td>
                    <td class="p-0 td-number">82.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Day-to-day activities limited a lot: Age 16 to 64</td>
                    <td class="p-0 td-number">1,924,080</td>
                    <td class="p-0 td-number">3.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Day-to-day activities limited a little: Age 16 to 64</td>
                    <td class="p-0 td-number">2,452,742</td>
                    <td class="p-0 td-number">4.6</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Day-to-day activities not limited: Age 16 to 64</td>
                    <td class="p-0 td-number">29,952,269</td>
                    <td class="p-0 td-number">56.5</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Very good health</td>
                    <td class="p-0 td-number">25,005,712</td>
                    <td class="p-0 td-number">47.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Good health</td>
                    <td class="p-0 td-number">18,141,457</td>
                    <td class="p-0 td-number">34.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Fair health</td>
                    <td class="p-0 td-number">6,954,092</td>
                    <td class="p-0 td-number">13.1</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Bad health</td>
                    <td class="p-0 td-number">2,250,446</td>
                    <td class="p-0 td-number">4.2</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Very bad health</td>
                    <td class="p-0 td-number">660,749</td>
                    <td class="p-0 td-number">1.2</td>
                </tr>
            </tbody>
            <tbody class="border-t-2">
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Provides no unpaid care</td>
                    <td class="p-0 td-number">47,582,440</td>
                    <td class="p-0 td-number">89.8</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Provides 1 to 19 hours unpaid care a week</td>
                    <td class="p-0 td-number">3,452,636</td>
                    <td class="p-0 td-number">6.5</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Provides 20 to 49 hours unpaid care a week</td>
                    <td class="p-0 td-number">721,143</td>
                    <td class="p-0 td-number">1.4</td>
                </tr>
                <tr class="h-9 p-0 border-grey3 border-b">
                    <td class="p-0 td-string">Provides 50 or more hours unpaid care a week</td>
                    <td class="p-0 td-number">1,256,237</td>
                    <td class="p-0 td-number">2.4</td>
                </tr>
            </tbody>
        </table>
        <a href="#" class="text-base">Download this dataset</a>
    </div>
    <a class="text-base icon-arrow p-3 pl-2 border border-nightBlue border-opacity-30  leading-none" href="#top">Back to top</a>
</section>
