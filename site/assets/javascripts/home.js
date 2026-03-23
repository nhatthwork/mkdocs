(function(){
  if(!document.querySelector('.hp')) return;
  document.body.classList.add('home-page');

  function easeOut(t){ return 1-Math.pow(1-t,4); }

  function counter(el,to,suffix,dur){
    var s=0,st=null;
    (function step(ts){
      if(!st) st=ts;
      var p=Math.min((ts-st)/dur,1);
      el.innerHTML=Math.round(s+(to-s)*easeOut(p))+(suffix||'');
      if(p<1) requestAnimationFrame(step);
    })(performance.now());
  }

  function animIn(el,delay){
    setTimeout(function(){
      el.style.transition='opacity .6s ease, transform .65s cubic-bezier(.34,1.56,.64,1)';
      el.style.opacity='1'; el.style.transform='none';
    },delay);
  }

  /* Hero entrance */
  ['.hp-tag','.hp-h1','.hp-hero-desc','.hp-ctas'].forEach(function(sel,i){
    var el=document.querySelector(sel); if(el) animIn(el,120+i*140);
  });
  document.querySelectorAll('.hp-stat').forEach(function(el,i){
    setTimeout(function(){
      el.style.transition='opacity .5s ease, transform .6s cubic-bezier(.34,1.56,.64,1), background .2s, box-shadow .2s';
      el.style.opacity='1'; el.style.transform='none';
    },500+i*90);
  });

  /* Counters */
  setTimeout(function(){
    var data=[{s:'.hp-stat:nth-child(1) .hp-stat-num',v:300,sx:'<sup>+</sup>'},
              {s:'.hp-stat:nth-child(2) .hp-stat-num',v:6,sx:''},
              {s:'.hp-stat:nth-child(3) .hp-stat-num',v:2026,sx:''},
              {s:'.hp-stat:nth-child(4) .hp-stat-num',v:24,sx:'<sup>/7</sup>'}];
    data.forEach(function(d){
      var el=document.querySelector(d.s); if(el) counter(el,d.v,d.sx,1200);
    });
    var fills=[100,75,90,85];
    document.querySelectorAll('.hp-stat-fill').forEach(function(bar,i){
      setTimeout(function(){ bar.style.width=fills[i]+'%'; },i*120);
    });
    /* Notice */
    var n=document.querySelector('.hp-notice');
    if(n){ n.style.transition='opacity .5s ease, transform .5s ease'; n.style.opacity='1'; n.style.transform='none'; }
  },650);

  /* Scroll reveal */
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target; el.classList.add('in');
      el.querySelectorAll('.hp-card:not(.in),.hp-ov-card:not(.in),.hp-link-card:not(.in)').forEach(function(c,i){
        setTimeout(function(){ c.style.transitionDelay=i*70+'ms'; c.style.opacity='1'; c.style.transform='none'; },i*70);
      });
      obs.unobserve(el);
    });
  },{threshold:0.07});
  document.querySelectorAll('.hp-sec,.hp-invoice-section').forEach(function(el){ obs.observe(el); });

  /* Tabs */
  document.querySelectorAll('.hp-tabs-wrap').forEach(function(wrap){
    wrap.querySelectorAll('.hp-tab').forEach(function(btn){
      btn.addEventListener('click',function(){
        wrap.querySelectorAll('.hp-tab').forEach(function(b){ b.classList.remove('on'); });
        wrap.querySelectorAll('.hp-pane').forEach(function(p){ p.classList.remove('on'); });
        btn.classList.add('on');
        var pane=wrap.querySelector('#hp-pane-'+btn.dataset.tab);
        if(pane) pane.classList.add('on');
      });
    });
  });

  /* Parallax hero mesh on mousemove */
  var mesh=document.querySelector('.hp-hero-mesh');
  document.querySelector('.hp-hero')&&document.querySelector('.hp-hero').addEventListener('mousemove',function(e){
    if(!mesh) return;
    var rect=this.getBoundingClientRect();
    var x=(e.clientX-rect.left)/rect.width, y=(e.clientY-rect.top)/rect.height;
    mesh.style.transform='translate('+(x-0.5)*-16+'px,'+(y-0.5)*-10+'px)';
  });

  /* Magnetic CTA */
  document.querySelectorAll('.hp-cta').forEach(function(btn){
    btn.addEventListener('mousemove',function(e){
      var r=btn.getBoundingClientRect();
      var x=(e.clientX-r.left-r.width/2)*.25, y=(e.clientY-r.top-r.height/2)*.25;
      btn.style.transform='translateY(-3px) scale(1.02) translate('+x+'px,'+y+'px)';
    });
    btn.addEventListener('mouseleave',function(){ btn.style.transform=''; });
  });

  /* 3D tilt cards */
  function initTilt(){
    document.querySelectorAll('.hp-card,.hp-ov-card').forEach(function(card){
      card.addEventListener('mousemove',function(e){
        var r=card.getBoundingClientRect();
        var x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        card.style.transform='translateY(-5px) rotateX('+(y*-5)+'deg) rotateY('+(x*5)+'deg) scale(1.01)';
        card.style.transition='transform .1s ease,box-shadow .1s';
      });
      card.addEventListener('mouseleave',function(){
        card.style.transform=''; card.style.transition='transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s';
      });
    });
  }
  setTimeout(initTilt,1200);

  /* Invoice card reveal animation */
  var invObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var card=e.target.querySelector('.hp-invoice-card');
      if(card){ card.style.transition='transform .7s cubic-bezier(.34,1.56,.64,1), box-shadow .7s'; card.style.transform='rotate(0deg) translateY(-8px)'; }
      invObs.unobserve(e.target);
    });
  },{threshold:0.2});
  document.querySelectorAll('.hp-invoice-preview').forEach(function(el){ invObs.observe(el); });


  /* Modal — close on Escape */
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      var m = document.getElementById('hp-modal');
      if(m) m.classList.remove('open');
    }
  });

/* Typewriter */
(function(){
  var texts = [
    "Phần mềm hóa đơn điện tử M-invoice",
    "Quản lý rủi ro hóa đơn - mSMI",
    "Chứng từ khấu trừ thuế TNCN - mTNCN",
    "Bảo hiểm xã hội điện tử - mBHXH",
    "Giải pháp ký số - mCA"
  ];
  var el = document.getElementById('hp-typewriter');
  if(!el) return;
  var ti = 0, ci = 0, deleting = false, pause = false;

  function type(){
    if(pause) return;
    var full = texts[ti];
    if(!deleting){
      ci++;
      el.innerHTML = highlight(full.slice(0, ci));
      if(ci === full.length){ pause=true; setTimeout(function(){ pause=false; deleting=true; type(); }, 2200); return; }
      setTimeout(type, 55);
    } else {
      ci--;
      el.innerHTML = highlight(full.slice(0, ci));
      if(ci === 0){ deleting=false; ti=(ti+1)%texts.length; setTimeout(type, 400); return; }
      setTimeout(type, 28);
    }
  }

  function highlight(str){
    /* Tô đỏ phần sau dấu " - " hoặc chữ "M-invoice" */
    return str
      .replace(/^(Phần mềm hóa đơn điện tử )(M-invoice.*)$/, '$1<span class="hp-r">$2</span>')
      .replace(/^(.*?)( - )(m[A-Z].*)$/, '$1$2<span class="hp-r">$3</span>');
  }

  setTimeout(type, 900);
})();


/* Floating particles */
(function(){
  var canvas = document.getElementById('hp-particles');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var hero = document.querySelector('.hp-hero');
  var mx = -999, my = -999;

  function resize(){
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var particles = [];
  for(var i = 0; i < 100; i++){
    particles.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - .5) * .4,
      vy: (Math.random() - .5) * .4,
      r:  Math.random() * 1.5 + .6,
      c:  Math.random() > .5 ? '#383b96' : '#f53423',
      a:  Math.random() * .18 + .06
    });
  }

  hero.addEventListener('mousemove', function(e){
    var r = hero.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  hero.addEventListener('mouseleave', function(){ mx = -999; my = -999; });

  (function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p){
      /* hút về phía chuột */
      var dx = mx - p.x, dy = my - p.y;
      var dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 120){ p.vx += dx/dist * .04; p.vy += dy/dist * .04; }

      p.vx *= .97; p.vy *= .97;
      p.x += p.vx; p.y += p.vy;

      if(p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = p.a;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    /* vẽ đường nối giữa các hạt gần nhau */
    for(var i = 0; i < particles.length; i++){
      for(var j = i+1; j < particles.length; j++){
        var p = particles[i], q = particles[j];
        var dx = p.x-q.x, dy = p.y-q.y;
        var d = Math.sqrt(dx*dx + dy*dy);
        if(d < 100){
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = '#383b96';
         ctx.globalAlpha = (1 - d/100) * .08;;
          ctx.lineWidth = .8;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    requestAnimationFrame(loop);
  })();
})();

/* Fix anchor scroll + opacity */
document.querySelectorAll('a[data-scroll]').forEach(function(a){
  a.addEventListener('click', function(e){
    e.preventDefault();
    var target = document.getElementById(a.dataset.scroll);
    if(!target) return;
    target.classList.add('in');
    var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: top, behavior: 'smooth' });
    setTimeout(function(){
      document.querySelectorAll('.hp-sec:not(.in),.hp-invoice-section:not(.in)').forEach(function(el){
        el.classList.add('in');
        el.querySelectorAll('.hp-card:not(.in),.hp-ov-card:not(.in),.hp-link-card:not(.in)').forEach(function(c,i){
          setTimeout(function(){ c.style.opacity='1'; c.style.transform='none'; }, i*70);
        });
      });
    }, 800);
  });
});

})();