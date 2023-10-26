var pu = parseInt(window.prompt("Veuillez entrez le prix du produit à l'unité"));
var qtecom = parseInt(window.prompt("Veuillez entrez la quantité voulu"));
var tot = pu*qtecom;
var rem =0;
var port= 0;
var pap = 0;
var TR =0;

if ((tot>=100) && (tot<=200))
{
    rem =0.05
    TR = tot*rem;
    
    pap=tot-TR;
    alert(pap);
    console.log(TR);                                    
}

    else if (tot<100)  
        {
            rem=0
            pap= tot-TR;
            TR = tot*rem;
                alert(pap)
        }


    else if (tot>200)
        {
            rem =0.10
            pap=tot-TR;
            TR = tot*rem;
                alert(pap)
        }



if (tot-(tot*rem)>500)
{
    port = 0
    pap=(tot-(tot*rem)+(tot*port));
    alert(pap)
}
        else if ((tot-(tot*rem)<500) && (tot-(tot*rem)>300))
        {
            port = 0.02
            pap=((tot-tot*rem)+(tot-tot*rem)*port);
                alert(pap)
        }

        else if (tot-(tot*rem)<=300)
        {
            port = 6
            pap=((tot-tot*rem)+port);
            alert(pap)

        }

