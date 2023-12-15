
var saleh = [
    {
        wisdom :'لو لاقيت غراب أبيض هتلاقي صاحب بلاش تشخبط الحبر خلص',   
        speaker :'سيد بخة'
    }
    ,
    {
        wisdom :'تحية خلصة للباشمهندس محمد هندي ',   
        speaker :'تحية خاصة من فوكس'
    }
    ,
    {
        wisdom :'تحية خلصة ل كل اعضاء الجروب حجاتي الكرام ',   
        speaker :'تحية خاصة من فوكس'
    }
    ,
    {
        wisdom :'تحية خلصة للباشمهندس يوسف سمير ',   
        speaker :'تحية خاصة من فوكس'
    }
    ,
    {
        wisdom :'تحية خلصة للمهندسين والعجوزة هههه ',   
        speaker :'اسف ع الالشة'
    }
    ,
    {
        wisdom :'الكلام مش مهنة اصحى للكلام',   
        speaker :'شواحة'
    }
    ,
    {
        wisdom :'متنساش اصلك عشان ف الماضي وصفك',   
        speaker :'أبو صلاح اللي هو أنا يعني'
    }
    ,
    {
        wisdom :'متبحثش في جوجل خليك زكي وافهم حلولك شخبط ع الجافا ',   
        speaker :'أنا تاني'
    }
    ,
    {
        wisdom :'  الجافا سكريبت  فرص مش عجوة وقرص ',   
        speaker :'بيكا'
    }
    ,
    {
        wisdom :'توك توك يلمنا ولا كفيل يذلنا خلصانة ب فيزا ',   
        speaker :'شوقي الصافي'
    }
    ,
    {
        wisdom :' الجافا أداء مش شد أجزاء خلصانة ب جافا سكريبت'   ,   
        speaker :'ابو صلاح'
    }
    ,
    {
        wisdom :' الدنيا دوامة ومفيش عوامة هتغرق يعني',   
        speaker :'عصمت الدرملي'
    }
    ,
    {
        wisdom :'يا تخليك قد كلامك، يا تخلي كلامك على قدك',   
        speaker :'بيكا'
    }
    
    ]     
    var scientist =document.getElementById('wisdom');
    var whoSaidIt =document.getElementById('speaker');
    
    var newThing;

    function transAction(){
        var i = Math.floor(Math.random() * saleh.length) ;

        while (i === newThing ) {
            i = Math.floor(Math.random() * saleh.length) ;
        }
        newThing = i;
        return newThing;
    }
    function quates(){
        var realAction = transAction();
        scientist.innerHTML= `<span>’’</span>${saleh[realAction].wisdom}<span>,,</span>`;
        whoSaidIt.innerHTML= `<span>’’</span>${saleh[realAction].speaker}<span>,,</span>`;
}

