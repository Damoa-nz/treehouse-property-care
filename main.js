(function(){
  /* Mobile menu */
  var toggle=document.getElementById('menuToggle'), nav=document.getElementById('mobileNav');
  function setMenu(open){
    if(!nav||!toggle) return;
    nav.classList.toggle('open',open);
    toggle.setAttribute('aria-expanded',open?'true':'false');
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
    document.body.style.overflow=open?'hidden':'';
  }
  if(toggle) toggle.addEventListener('click',function(){ setMenu(!nav.classList.contains('open')); });
  if(nav) nav.addEventListener('click',function(e){ if(e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      if(nav&&nav.classList.contains('open')){ setMenu(false); toggle.focus(); }
      document.querySelectorAll('.has-dd.open').forEach(function(d){ d.classList.remove('open'); d.querySelector('.dd-btn').setAttribute('aria-expanded','false'); });
    }
  });
  window.addEventListener('resize',function(){ if(window.innerWidth>980) setMenu(false); });

  /* Services dropdown (click/tap + keyboard) */
  document.querySelectorAll('.has-dd').forEach(function(dd){
    var btn=dd.querySelector('.dd-btn');
    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var open=dd.classList.toggle('open'); btn.setAttribute('aria-expanded',open?'true':'false');
    });
  });
  document.addEventListener('click',function(){ document.querySelectorAll('.has-dd.open').forEach(function(d){ d.classList.remove('open'); d.querySelector('.dd-btn').setAttribute('aria-expanded','false'); }); });

  /* Quote form */
  var form=document.getElementById('quoteForm'); if(!form) return;
  var success=document.getElementById('form-success'), msg=document.getElementById('formMsg');
  var params=new URLSearchParams(location.search), pre=params.get('service');
  if(pre){ var sel=form.querySelector('[name="Service required"]'); if(sel){ Array.prototype.forEach.call(sel.options,function(o){ if(o.value===pre) sel.value=pre; }); } }

  function setErr(input,text){ var f=input.closest('.field'); if(!f) return; f.classList.toggle('has-error',!!text); var e=f.querySelector('.err'); if(e) e.textContent=text||''; input.setAttribute('aria-invalid',text?'true':'false'); }
  function validate(){
    var ok=true, name=form.elements['Name'], email=form.elements['Email'], phone=form.elements['Phone'];
    setErr(name,''); setErr(email,''); setErr(phone,'');
    if(!name.value.trim()){ setErr(name,'Please enter your name.'); ok=false; }
    var hasE=email.value.trim(), hasP=phone.value.trim();
    if(!hasE&&!hasP){ setErr(email,'Please give us an email or a phone number so we can reach you.'); ok=false; }
    if(hasE&&!email.checkValidity()){ setErr(email,'Please enter a valid email address.'); ok=false; }
    if(hasP&&hasP.replace(/[^0-9]/g,'').length<7){ setErr(phone,'Please enter a valid phone number.'); ok=false; }
    if(!ok){ var first=form.querySelector('.has-error input'); if(first) first.focus(); }
    return ok;
  }
  function showError(t){ msg.textContent=t; msg.className='form-msg error'; msg.setAttribute('role','alert'); }

  form.addEventListener('submit',function(e){
    e.preventDefault(); msg.className='form-msg'; msg.textContent='';
    if(form.elements['_honey'].value) return;
    if(!validate()) return;
    var btn=form.querySelector('button[type="submit"]'), label=btn.textContent;
    btn.disabled=true; btn.textContent='Sending…';
    var data={}; new FormData(form).forEach(function(v,k){ data[k]=v; });
    function fail(){ btn.disabled=false; btn.textContent=label; showError('Sorry, we could not send your request. Please try again, or call or email us directly.'); }
    fetch('https://formsubmit.co/ajax/treehousenz9@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)})
      .then(function(r){ return r.json().then(function(j){ return {ok:r.ok,j:j}; }); })
      .then(function(x){
        if(x.ok && (x.j.success===true||x.j.success==='true')){
          form.style.display='none'; success.classList.add('show'); success.setAttribute('tabindex','-1'); success.focus();
        } else { fail(); }
      }).catch(fail);
  });
})();
