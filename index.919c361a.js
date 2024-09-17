document.addEventListener("click",function(t){var e=document.querySelector(".wall"),i=document.querySelector(".spider");if(t.target===e){var n=e.clientWidth,c=e.clientHeight,l=i.clientWidth,a=i.clientHeight,o=t.offsetX,r=t.offsetY;i.style.left=Math.max(0,Math.min(o-l/2,n-l))+"px",i.style.top=Math.max(0,Math.min(r-a/2,c-a))+"px"}});
//# sourceMappingURL=index.919c361a.js.map
