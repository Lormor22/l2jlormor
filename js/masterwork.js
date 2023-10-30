// Masterwork

function cerrar_todo(){

    let elemento1 = document.getElementById("table1");
    elemento1.innerHTML ="";


}



function mostrar_elemento_1(){

    cerrar_todo();

    let elemento1 = document.getElementById("table1");
    let nueva_tabla = document.createElement("table");
    nueva_tabla.setAttribute("border", "1");
    nueva_tabla.style.textAlign = "center";
    nueva_tabla.style.width = "80%";
    nueva_tabla.style.margin = "auto";
    nueva_tabla.innerHTML =`  <tr>
    <th colspan="4"  class="columna_backgroudn">Moirai Heavy</th>
</tr>
<tr class="columna_backgroudn">  
    <th > Item </th>
    <th > Bonus</th>
    <th > Item </th>
    <th > Bonus</th>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_heavy/casco_moi_h.png" alt="casco_moi_h"> 
        Moirai Helmet</td>
    <td  class="columna_backgroudn2" style=" text-align: left ;padding: 2%;">
        *P.Atk +1.25% <br>
        *Atk.Spd +1% <br>
        *Stun resistance +5% <br>
        *Fire resistance +3</td>
    <td  ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_heavy/guantes_moi_h.png" alt="guantes_moi_h"> 
        Moirai Gauntlet</td>
    <td style=" text-align: left ;padding: 2%;">
        *P.Atk +0.83% <br>
        *Atk.Spd +0.67% <br>
        *Stun resistance +5% <br>
        *Wind resistance +3</td>
</tr>
<tr >
    <td  class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_heavy/botas_moi_h.png" alt="botas_moi_h"> 
        Moirai Boots</td>
    <td  class="columna_backgroudn2" style="text-align: left ;padding: 2%;">
        *P.Atk +0.83% <br>
        *Atk.Spd +0.67% <br>
        *Stun resistance +5% <br>
        *Earth resistance +3</td>
    <td ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_heavy/pants_moi_h.png" alt="Gaiters"> 
        Moirai Gaiters</td>
    <td style=" text-align: left ;padding: 2%;">
        *P.Atk +2.08%<br>
        *Atk.Spd +1.67% <br>
        *Stun resistance +5% <br>
        *Water resistance +3</td>
    </tr>
<tr >
    <td  colspan="2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_heavy/escudo_moi.png" alt="escudo_moi"> 
        Moirai Shield</td>
    <td  colspan="2"style=" text-align: center ;">
        *Chance to resist magic damage +2%</td>
</tr>
<tr >
    <td colspan="2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_heavy/chest_moi_h.png" alt="chest_moi_h"> 
        Moirai Breastplate</td>
    <td  colspan="2"style=" text-align: left ;padding: 2%;">
        Bonus Set: <br>
        *STR +2, CON -2 <br>
        *P.Atk +4.26% <br>
        *Atk.Spd +4% <br>
        *Stun resistance  <br>
        *Chance to resist magic damage +2 <br>
        *Fire/Water/Wind/Earth resistance +3 <br>
        *Enables the Cloak slot  <br>
        + <b>Shield</b> - Shield Defense Rate +5% <br>
        <b>Bonus set +6:</b> When all set items are enchanted to +6 <br> or above: P.Def +59, MP 
        Regeneration + 2.823. <br>

    </td>
</tr>`
    elemento1.append(nueva_tabla); 
}
function mostrar_elemento_2(){

    cerrar_todo();

    let elemento1 = document.getElementById("table1");
    let nueva_tabla = document.createElement("table");
    nueva_tabla.setAttribute("border", "1");
    nueva_tabla.style.textAlign = "center";
    nueva_tabla.style.width = "80%";
    nueva_tabla.style.margin = "auto";
    nueva_tabla.innerHTML =`<tr>
                <th colspan="4" class="columna_backgroudn">Moirai Light</th>
            </tr>
            <tr class="columna_backgroudn">  
                <th > Item </th>
                <th > Bonus</th>
                <th > Item </th>
                <th > Bonus</th>
            </tr>
            <tr >
                <td class="columna_backgroudn2" ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_light/casco_moi_l.png" alt="casco_moi_l"> 
                    Moirai Leather Helmet</td>
                <td class="columna_backgroudn2" style="text-align: left ;padding: 2%;">
                    *MP Regeneration +1% <br>
                    *P. Atk. +1.25% <br>
                    *Hold resistance +5% <br>
                    *Fire resistance +3 <br>
                </td>
                <td ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_light/guantes_moi_l.png" alt="guantes_moi_l"> 
                    Moirai Leather Gloves </td>
                <td style="text-align: left ;padding: 2%;">
                *MP Regeneration +0.67% <br>
                *P. Atk. +0.83% <br> 
                *Hold resistance +5% <br>
                *Wind resistance +3 <br>
                </td>
            </tr>
            <tr >
                <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_light/botas_moi_l.png" alt="botas_moi_l"> 
                    Moirai Leather Boots </td>
                <td  class="columna_backgroudn2"style="text-align: left ;padding: 2%;">
                    *MP Regeneration +1% <br>
                    *P. Atk. +1.25% <br>
                    *Hold resistance +5% <br>
                    *Fire resistance +3 <br>
                </td>
                <td ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_light/pants_moi_l.png" alt="pants_moi_l"> 
                    Moirai Leather Legging  </td>
                <td style="padding-top: 2%; padding-bottom: 2%;">
                    *MP Regeneration +1.67% <br>
                    *P. Atk. +2.08% <br>
                    *Hold resistance +5% <br>
                    *Water resistance +3 <br>
                </td>
            </tr>
            
            <tr >
                <td colspan="2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_light/chest_moi_l.png" alt="chest_moi_l"> 
                    Moirai Leather Breastplate</td>
                <td  colspan="2" style="text-align: left ;padding: 2%;">
                    Bonus Set: <br>
                    *DEX +2, CON -2 <br>
                    *P.Atk +4.26% <br>
                    *Atk.Spd +4% <br>
                    *Speed +3% <br> 
                    *Hold resistance +50% <br>
                    *Fire/Water/Wind/Earth resistance +3 <br>
                    *Enables the Cloak slot  <br>
                    <b>Bonus set +6:</b> When all set items are enchanted to +6 <br>
                    or above: M.def +33, Evasion +2 <br>
                </td>
            </tr>`
            elemento1.append(nueva_tabla); 
}
function mostrar_elemento_3(){

    cerrar_todo();

    let elemento1 = document.getElementById("table1");
    let nueva_tabla = document.createElement("table");
    nueva_tabla.setAttribute("border", "1");
    nueva_tabla.style.textAlign = "center";
    nueva_tabla.style.width = "80%";
    nueva_tabla.style.margin = "auto";
    nueva_tabla.innerHTML =`<tr>
    <th colspan="4" class="columna_backgroudn">Moirai Robe</th>
</tr>
<tr class="columna_backgroudn">  
    <th > Item </th>
    <th > Bonus</th>
    <th > Item </th>
    <th > Bonus</th>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_robe/casco_moi_r.png" alt="casco_moi_r"> 
        Moirai Circlet  </td>
    <td class="columna_backgroudn2"style="text-align: left ;padding: 2%;">
        *M. Atk. +0.62% <br>
        *Paralysis resistance +5% <br>
        *Fire resistance +5 <br>
    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_robe/guantes_moir_r.png" alt="guantes_moir_r"> 
        Moirai Gloves    </td>
    <td style="text-align: left ;padding: 2%;">
        *M. Atk. +0.41% <br>
        *Paralysis resistance +5% <br>
        *Wind resistance +5 <br>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_robe/botas_moi_r.png" alt="botas_moi_r"> 
        Moirai Shoes   </td>
    <td class="columna_backgroudn2"style="text-align: left ;padding: 2%;">
        *M. Atk. +0.41% <br>
        *Paralysis resistance +5% <br>
        *Earth resistance +5 <br>
    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_robe/pants_moi_r.png" alt="pants_moi_r"> 
        Moirai Stockings</td>
    <td style="text-align: left ;padding: 2%;">
        *M. Atk. +1.03% <br>
        *Paralysis resistance +5% <br>
        *Water resistance +5 <br>
</tr>
<tr >
    <td colspan="2" ><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_robe/moi_sig.png" alt="sigil"> 
        Moirai Sigil</td>
    <td colspan="2" style="text-align: center;">
        *Chance to resist magic damage +2%
</tr>
<tr>
    <td colspan="2"><img src="../img/armas_armaduras/armaduras/Moirai_/Moirai_robe/chest_moi_r.png" alt="chest_moi_r"> 
        Moirai Tunic</td>
    <td colspan="2" style="text-align: left ;padding: 2%;">
        Bonus Set:  <br>
        *WIT +2, MEN -2 <br>
        *M.Atk +8.11% <br>
        *Casting Spd +15% <br>
        *Fire/Water/Wind/Earth resistance +3 <br>
        *Paralysis resistance +50% <br>
        *Enables the Cloak slot  <br>
        <b>Bonus set +6:</b> When all set items are enchanted to +6 <br>
        or above: P.def +38, Weight Limit +30%

    </td>
</tr>`
elemento1.append(nueva_tabla); 
}
function mostrar_elemento_4(){

    cerrar_todo();

    let elemento1 = document.getElementById("table1");
    let nueva_tabla = document.createElement("table");
    nueva_tabla.setAttribute("border", "1");
    nueva_tabla.style.textAlign = "center";
    nueva_tabla.style.width = "80%";
    nueva_tabla.style.margin = "auto";
    nueva_tabla.innerHTML =`<tr>
    <th colspan="4"  class="columna_backgroudn">Vesper Heavy</th>
</tr>
<tr class="columna_backgroudn">  
    <th > Item </th>
    <th > Bonus</th>
    <th > Item </th>
    <th > Bonus</th>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Heavy/helmet_vesp_h.png" alt="helmet_vesp_h"> 
        Vesper Noble Helmet</td>
    <td class="columna_backgroudn2" style=" text-align: left ;padding: 2%;">
        *Max. HP +133 <br>
        *P. Atk. +0.62% <br>
        *P. Def. +0.62% <br>
        *Sleep resistance +10.5% <br>
        *Hold resistance +10.5%. <br>
    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Heavy/guantes_vesp_h.png" alt="guantes_vesp_h"> 
        Vesper Noble Gauntlet</td>
    <td style=" text-align: left ;padding: 2%;">
        *Max. HP +22 <br>
        *P. Atk. +0.41% <br>
        *P. Def. +0.41% <br>
        *Sleep resistance +7% <br>
        *Hold resistance +7% <br>
    </td>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Heavy/guantes_vesp_h.png" alt="Vesper Noble Boots"> 
        Vesper Noble Boots</td>
    <td class="columna_backgroudn2"style=" text-align: left ;padding: 2%;">
        *Max. HP +22 <br>
        *P. Atk. +0.41% <br>
        *P. Def. +0.41% <br>
        *Sleep resistance +7% <br>
        *Hold resistance +7% <br>
    </td>
    <td  ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Heavy/pant_vesp_h.png" alt="Vesper Noble Gaiters"> 
        Vesper Noble Gaiters</td>
    <td  style="text-align: left ;padding: 2%;">
        *Max. HP +55. <br>
        *P. Atk. +1.03% <br>
        *P. Def. +1.03% <br>
        *Sleep resistance +18% <br>
        *Hold resistance +18% <br>
</tr>
<tr >
    <td  colspan="2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Heavy/escudo_vesp.png" alt=" Vesper Shield"> 
        Vesper Shield</td>
    <td  colspan="2"style=" text-align: center ;">
        *Chance to resist magic damage +2%.</td>
</tr>
<tr >
    <td colspan="2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Heavy/chest_vesper_h.png" alt="Vesper Noble Breastplate"> 
        Vesper Noble Breastplate</td>
    <td  colspan="2"style=" text-align: left ;padding: 2%;">
        Bonus Set: <br>
        *STR +2, DEX -2 <br>
        *Max.HP +540 <br>
        *P.Atk +5.57% <br>
        *P.Def +5.57% <br>
        *Speed +5 <br>
        *Accuracy +4 <br>
        *Hold resistance +70% <br>
        *Sleep resistance +70% <br>
        *Chance to resist magic damage +1 <br>
        *Enables the Cloak slot  <br>
        <b>+ Shield</b> - Shield Defense Rate +5% <br>
        <b>Bonus set +6: </b>When all set items are enchanted to +6  <br>or above: P.Def +59, MP 
        Regeneration + 2.823.


    </td>
</tr>`
    elemento1.append(nueva_tabla); 
}
function mostrar_elemento_5(){

    cerrar_todo();

    let elemento1 = document.getElementById("table1");
    let nueva_tabla = document.createElement("table");
    nueva_tabla.setAttribute("border", "1");
    nueva_tabla.style.textAlign = "center";
    nueva_tabla.style.width = "80%";
    nueva_tabla.style.margin = "auto";
    nueva_tabla.innerHTML =`<tr>
    <th colspan="4" class="columna_backgroudn">Vesper Light</th>
</tr>
<tr class="columna_backgroudn">  
    <th > Item </th>
    <th > Bonus</th>
    <th > Item </th>
    <th > Bonus</th>
</tr>
<tr >
    <td class="columna_backgroudn2" ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Light/casco_vesp_l.png" alt="Vesper Noble Leather Helmet"> 
        Vesper Noble Leather Helmet</td>
    <td class="columna_backgroudn2" style="text-align: left ;padding: 2%;">
        *Max. MP +87 <br>
        *MP Regeneration +0.41% <br>
        *P. Atk. +0.41% <br>
        *Atk. Spd. +0.41% <br>
    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Light/guantes_vesp_l.png" alt="Vesper Noble Leather Gloves"> 
        Vesper Noble Leather Gloves </td>
    <td style="text-align: left ;padding: 2%;">
        *Max. MP +58. <br>
        *MP Regeneration +0.27% <br>
        *P. Atk. +0.27% <br>
        *Atk. Spd. +0.27% <br>
        
    </td>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Light/botas_vesp_l.png" alt="Vesper Noble Leather Boots"> 
        Vesper Noble Leather Boots </td>
    <td  class="columna_backgroudn2"style="text-align: left ;padding: 2%;">
        *Max. MP +58 <br>
        *MP Regeneration +0.27% <br>
        *P. Atk. +0.27% <br>
        *Atk. Spd. +0.27% <br>
        
    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Light/pant_vesp_l.png" alt="Vesper Noble Leather Leggings"> 
        Vesper Noble Leather Leggings </td>
    <td style="text-align: left ;padding: 2%;">
        *Max. MP +145 <br>
        *MP Regeneration +0.68% <br>
        *P. Atk. +0.68% <br>
        *Atk. Spd. +0.68% <br>
    </td>
</tr>

<tr >
    <td colspan="2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Light/chest_vesper_l.png" alt="Vesper Noble Leather Breastplate"> 
        Vesper Noble Leather Breastplate</td>
    <td  colspan="2" style="text-align: left ;padding: 2%;">
        Bonus Set: <br> 
        *STR +1, DEX +1, CON -2 <br>
        *Max MP +354 <br>
        *P.Atk +5.57% <br>
        *Atk.Spd +5% <br>
        *MP regeneration +5% <br>
        *Evasion +3 <br>
        *Critical Damage +172 <br>
        *Paralysis resistance +50% <br>
        *Enables the Cloak slot <br>
        Bonus set +6: When all set items are enchanted to +6 <br>or above: M.Def +33, Evasion +2 <br>

    </td>
</tr>`
    elemento1.append(nueva_tabla); 
}
function mostrar_elemento_6(){

    cerrar_todo();

    let elemento1 = document.getElementById("table1");
    let nueva_tabla = document.createElement("table");
    nueva_tabla.setAttribute("border", "1");
    nueva_tabla.style.textAlign = "center";
    nueva_tabla.style.width = "80%";
    nueva_tabla.style.margin = "auto";
    nueva_tabla.innerHTML =`<tr>
    <th colspan="4" class="columna_backgroudn">Vesper Robe</th>
</tr>
<tr class="columna_backgroudn">  
    <th > Item </th>
    <th > Bonus</th>
    <th > Item </th>
    <th > Bonus</th>
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Robe/casco_vesp_r.png" alt="Vesper Noble Circlet"> 
        Vesper Noble Circlet  </td>
    <td class="columna_backgroudn2"style="text-align: left ;padding: 2%;">
        *MP Regeneration +0.41% <br>
        *M. Atk. +0.41% <br>
        *Stun resistance +7.5% <br>
        *Casting interruption resistance <br>

    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Robe/guantes_vesp_r.png" alt="Vesper Noble Gloves"> 
        Vesper Noble Gloves</td>
    <td style="text-align: left ;padding: 2%;">
        *MP Regeneration +0.27% <br>
        *M. Atk. +0.27% <br>
        *Stun resistance +5% <br>
        *Casting interruption resistance +3 <br>
        
</tr>
<tr >
    <td class="columna_backgroudn2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Robe/botas_vesp_r.png" alt="Vesper Noble Shoes"> 
        Vesper Noble Shoes   </td>
    <td class="columna_backgroudn2"style="text-align: left ;padding: 2%;">
        *MP Regeneration +0.27% <br>
        *M. Atk. +0.27% <br>
        *Stun resistance +5% <br>
        *Casting interruption resistance +3 <br>

    </td>
    <td ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Robe/pants_vesp_r.png" alt="Vesper Noble Stockings"> 
        Vesper Noble Stockings</td>
    <td style="text-align: left ;padding: 2%;">
        MP Regeneration +0.68% <br>
        *M. Atk. +0.68% <br>
        *Stun resistance +12.5% <br> 
        *Casting interruption resistance +7.5 <br>

</tr>
<tr >
    <td colspan="2" ><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Robe/vesper_sig.png" alt=" Vesper sigil"> 
        Vesper Sigil</td>
    <td colspan="2" style="text-align: center;">
        *Chance to resist magic damage +2%
</tr>
<tr>
    <td colspan="2"><img src="../img/armas_armaduras/armaduras/Vesper_/Vesper_Robe/chest_vesper_r.png" alt="Vesper Noble Tunic"> 
        Vesper Noble Tunic</td>
    <td colspan="2" style="text-align: left ;padding: 2%;">
        Bonus Set:  <br>
        *INT +1, WIT +1, MEN -2 <br>
        *M.Atk +8.47% <br>
        *Casting Spd +15% <br>
        *Speed +7 <br>
        *Magic Clarity +3% <br>
        *MP Regeneration +5.57% <br>
        *Stun resistance +50% <br>
        *Resistance to casting interrupt +30 <br>
        *Enables the Cloak slot <br>
        Bonus set +6: When all set items are enchanted to +6  <br>or above: P.Def +38, Weight Limit +30% <br>


    </td>
</tr>`
    elemento1.append(nueva_tabla); 
}




let boton_table1 = document.getElementById("armadura1");
boton_table1.addEventListener("click" , mostrar_elemento_1);

let boton_table2 = document.getElementById("armadura2");
boton_table2.addEventListener("click" , mostrar_elemento_2);

let boton_table3 = document.getElementById("armadura3");
boton_table3.addEventListener("click" , mostrar_elemento_3);

let boton_table4 = document.getElementById("armadura4");
boton_table4.addEventListener("click" , mostrar_elemento_4);

let boton_table5 = document.getElementById("armadura5");
boton_table5.addEventListener("click" , mostrar_elemento_5);

let boton_table6 = document.getElementById("armadura6");
boton_table6.addEventListener("click" , mostrar_elemento_6);


