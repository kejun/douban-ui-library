Douban.add('db-navsrh', function(D){

			var frm = D.one('.nav-srh form'), inp = frm.one('input[type=text]'), opt = D.one('.srh-opt'),
      closeOpt = function(){
				D.one('.nav-srh .srh-submit').removeClass('on');
				opt.setStyle('display', 'none');
			};

			if(!frm){
			  return;
			}

			inp.set('value', inp.getAttribute('title'));
			inp.setStyle('color', '#aaa');

			inp.on('focus', function(e){
				if(e.target.get('value') === inp.getAttribute('title')){
			  e.target.set('value', '');
				e.target.setStyle('color', '#000');
				}
			});

			inp.on('blur', function(e){
				if(e.target.get('value') === ''){
				  e.target.setStyle('color', '#aaa');
			    inp.set('value', inp.getAttribute('title'));
				}
			});

			D.one('.nav-srh .srh-submit a').on('click', function(e){
				e.halt();
				var c = e.currentTarget.ancestor();
				if(!opt){
				  return;
				}
				if(c.hasClass('on')){
				  closeOpt();
				}else{
					opt.setStyles({'display': 'block', 'top': (c.get('region').bottom - 1) + 'px'});
					opt.setStyle('left', (c.get('region').right - opt.get('region').width) + 'px');
					c.addClass('on');
				}
		  }); 

			D.one('body').on('click', closeOpt);

			opt.delegate('click', function(e){
					e.halt();
					frm.setAttribute('action', e.currentTarget.getAttribute('href'));
					if(inp.get('value') !== '' && inp.get('value') !== inp.getAttribute('title')){
					  frm.submit();
					}
					closeOpt();
			}, 'li a');

			frm.on('submit', function(e){
					alert(e);
					if(inp.get('value') === '' || inp.get('value') === inp.getAttribute('title')){
					  e.halt();
					}
			});


}, '0.0.1', {requires: ['node']});
