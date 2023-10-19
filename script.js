Shery.imageEffect("#back", {style: 5, config:{"a":{"value":0.74,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"aspect":{"value":2.107856191744341},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1.2,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.1,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.2,"range":[0,2]},"noise_scale":{"value":50,"range":[0,100]}},gooey:true, })

var elems= document.querySelectorAll(".elem")

elems.forEach(function(elem){
    console.log(elem)
    var h1s=elem.querySelectorAll('h1')
    var index=0;
    var h2s=document.querySelectorAll('h2')
    
    document.querySelector("#main").addEventListener('click',()=>{
        
        gsap.to(h1s[index], {
            top: '-=100%',
            ease: 'expo.inOut', // Use a string for the ease property
            duration: 1,
            onComplete:function(){
                gsap.set(this._targets[0],{ top: "100%"})
            }
        });
        console.log(index)
    
        index=== h1s.length -1 ? (index=0) : index++;
    
        gsap.to(h1s[index], {
            top: '-=100%',
            ease: 'expo.inOut', // Use a string for the ease property
            duration: 1
        });
        
    })
})

gsap.to("#second", {
    y: -100,
    duration: 3,
    scrollTrigger: { trigger: "#second" },
  });