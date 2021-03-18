/* Readequado para as necessidades do Raposas a partir de outros programas Open Sources.
   Programa original: https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index
   Todos os créditos ao ParveenBhadooOfficial pelo excelente trabalho!
*/

// Initialize the page
function init() {
	document.siteName = $('title').html();
	var html = `
<header >
   <div id="nav">
   </div>
</header>
<div>
<div id="content">
</div>
<br>
<script>
	function darkLight(){"dark"!=localStorage.toggled?($("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/neelygenet/raposas@${UI.version}/css/dark-mode.css" type="text/css" />'),localStorage.toggled="dark"):($('link[href="https://cdn.jsdelivr.net/gh/neelygenet/raposas@${UI.version}/css/dark-mode.css"]').remove(),localStorage.toggled="")}$("#main").toggleClass(localStorage.toggled),"dark"==localStorage.toggled&&$("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/neelygenet/raposas@${UI.version}/css/dark-mode.css" type="text/css" />');
</script>
<div class="darkmode-toggle" onclick="darkLight()">🌓</div>
<footer class="text-muted"> <div class="container"> ${UI.credit ? '<p>Construído com <i class="fa fa-heart" title="amor" style="color: #dc3545!important;"></i> e <i class="fa fa-coffee" title="café" style="color: #ffc107!important;"></i> por <a href="https://github.com/neelygenet/raposas" target="_blank">Neely Genet</a> com a ajuda de outros programas Open Source.</p>' : ''} <p><i class="fas fa-crow" title="corvo" style="color: #000000!important;"></i> ${UI.copyright_year} - ${UI.company_name}. Todos os direitos liberados. <a href="https://www.youtube.com/watch?v=LXilEPmkoQY" target="_blank">Copiar não é roubar</a>.</p> 
<center><br>
<script id="_wauu6d">var _wau = _wau || []; _wau.push(["colored", "wefh4d9lyh", "u6d", "cfe2f3000000"]);</script><script async src="//waust.at/co.js"></script>
</center></div> </footer>
  `;
	$('body').html(html);
}

const Os = {
	isWindows: navigator.platform.toUpperCase().indexOf('WIN') > -1, // .includes
	isMac: navigator.platform.toUpperCase().indexOf('MAC') > -1,
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
	isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

function getDocumentHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	);
}

function render(path) {
	if (path.indexOf("?") > 0) {
		path = path.substr(0, path.indexOf("?"));
	}
	title(path);
	nav(path);
	// .../0: This
	var reg = /\/\d+:$/g;
	if (window.MODEL.is_search_page) {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		render_search_result_list()
	} else if (path.match(reg) || path.substr(-1) == '/') {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		list(path);
	} else {
		file(path);
	}
}


// Render title
function title(path) {
	path = decodeURI(path);
	var cur = window.current_drive_order || 0;
	var drive_name = window.drive_names[cur];
	path = path.replace(`/${cur}:`, '');
	//$('title').html(document.siteName);
	var model = window.MODEL;
	if (model.is_search_page)
		$('title').html(`${document.siteName} - Resultados para ${model.q}`);
	else
		$('title').html(document.siteName);
}

// Render the navigation bar
function nav(path) {
	var model = window.MODEL;
	var html = "";
	var cur = window.current_drive_order || 0;
	html += `<nav class="navbar navbar-expand-lg ${UI.dark_mode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}">
  <a class="navbar-brand" href="/${cur}:/">${UI.logo_image ? '<img border="0" alt="'+UI.company_name+'" src="'+UI.logo_link_name+'" height="64px" class="mainLogo">' : UI.logo_link_name}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/${cur}:/">Início</a>
      </li>`;
	var names = window.drive_names;
	var drive_name = window.drive_names[cur];
	/*html += `<button class="mdui-btn mdui-btn-raised" mdui-menu="{target: '#drive-names'}"><i class="mdui-icon mdui-icon-left material-icons">share</i> ${names[cur]}</button>`;
	html += `<ul class="mdui-menu" id="drive-names" style="transform-origin: 0px 0px; position: fixed;">`;
	names.forEach((name, idx) => {
	    html += `<li class="mdui-menu-item ${(idx === cur) ? 'mdui-list-item-active' : ''} "><a href="/${idx}:/" class="mdui-ripple">${name}</a></li>`;
	});
	html += `</ul>`;*/

	// Dropdown to select different drive roots.
	html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Escolha o drive</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`;
	names.forEach((name, idx) => {
		html += `<a class="dropdown-item"  href="/${idx}:/">${name}</a>`;
	});
	html += `</div></li>`;

	html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Caminho Atual</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item"  href="/${cur}:/ ">📁 Início</a>`;

	if (!model.is_search_page) {
		var arr = path.trim('/').split('/');
		var p = '/';
		if (arr.length > 1) {
			arr.shift();
			for (var i in arr) {
				var n = arr[i];
				n = decodeURI(n);
				p += n + '/';
				if (p.endsWith(".mp3/") === true || p.endsWith(".mp4/") === true || p.endsWith(".mkv/") === true || p.endsWith(".flac/") === true || p.endsWith(".m4a/") === true || p.endsWith(".pdf/") === true || p.endsWith(".jpg/") === true || p.endsWith(".png/") === true || p.endsWith(".jpeg/") === true || p.endsWith(".gif/") === true || p.endsWith(".md/") === true || p.endsWith(".zip/") === true || p.endsWith(".rar/") === true || p.endsWith(".exe/") === true  || p.endsWith(".tar/") === true) {
				    p = p.slice(0, -1);
				}
				if (n === '') {
					break;
				}
				html += `<a class="dropdown-item"  href="/${cur}:${p}">📁 ${n}</a>`;
			}
		}
	}

	html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mais</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">

<a class="dropdown-item" href="https://blog.raposas.net/p/digital-milenium-copyright-act-dmca.html" target="_blank"><i class="far fa-copyright" style="color: #000000;"></i> DMCA</a>
<a class="dropdown-item" href="https://blog.raposas.net/" target="_blank"><i class="fab fa-blogger" style="color: #FF4500;"></i> Blog</a>
<a class="dropdown-item" href="t.me/raposas_net" target="_blank"><i class="fab fa-telegram" style="color: #7B68EE"></i> Telegram</a>

</div></li>`;

	var search_text = model.is_search_page ? (model.q || '') : '';
	const isMobile = Os.isMobile;
	var search_bar = `
</ul>
<form class="form-inline my-2 my-lg-0" method="get" action="/${cur}:search">
<input class="form-control mr-sm-2" name="q" type="search" placeholder="🔎 Pesquisar" aria-label="Pesquisar" value="${search_text}" required>
<button class="btn ${UI.dark_mode ? 'btn-secondary' : 'btn-outline-success'} my-2 my-sm-0" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Pesquisar</button>
</form>
</div>
</nav>
`;

	// Personal or team
	if (model.root_type < 2) {
		// Show search box
		html += search_bar;
	}

	$('#nav').html(html);
	mdui.mutation();
	mdui.updateTextFields();
}

/**
 * Initiate POST request for listing
 * @param path Path
 * @param params Form params
 * @param resultCallback Success Result Callback
 * @param authErrorCallback Pass Error Callback
 */
function requestListPath(path, params, resultCallback, authErrorCallback) {
	var p = {
		password: params['password'] || null,
		page_token: params['page_token'] || null,
		page_index: params['page_index'] || 0
	};
	$.post(path, p, function (data, status) {
		var res = jQuery.parseJSON(data);
		if (res && res.error && res.error.code == '401') {
			// Password verification failed
			if (authErrorCallback) authErrorCallback(path)
		} else if (res && res.data) {
			if (resultCallback) resultCallback(res, path, p)
		}
	})
}

/**
 * Search POST request
 * @param params Form params
 * @param resultCallback Success callback
 */
function requestSearch(params, resultCallback) {
	var p = {
		q: params['q'] || null,
		page_token: params['page_token'] || null,
		page_index: params['page_index'] || 0
	};
	$.post(`/${window.current_drive_order}:search`, p, function (data, status) {
		var res = jQuery.parseJSON(data);
		if (res && res.data) {
			if (resultCallback) resultCallback(res, p)
		}
	})
}

// Render file list
function list(path) {
	var content = `
  <div class="container"><br>
  <div class="card">
  <h5 class="card-header" id="folderne"><input type="text" id="folderne" class="form-control" placeholder="Caminho atual: Página inicial" value="" readonly><script>document.getElementById("folderne").innerHTML='Pasta atual: '+decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')-1))).replace('/','').replace('/','');</script>
  </h5>
  <div id="list" class="list-group">
  </div>
  </div>
  <div class="card">
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
  </div>
  </div>
  `;
	$('#content').html(content);

	var password = localStorage.getItem('password' + path);
	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Carregando...</span></div></div>`);
	//$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	/**
	 * Callback after the column list request successfully returns data
	 * The result returned by @param res (object)
	 * @param path the requested path
	 * @param prevReqParams parameters used in request
	 */
	function successResultCallback(res, path, prevReqParams) {

		// Temporarily store nextPageToken and currentPageIndex in the list element
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		// Remove loading spinner
		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			// If it is the last page, unbind the scroll event, reset scroll_status, and append the data
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			append_files_to_list(path, res['data']['files']);
		} else {
			// If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
			append_files_to_list(path, res['data']['files']);
			if (window.scroll_status.event_bound !== true) {
				// Bind event, if not yet bound
				$(window).on('scroll', function () {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();
					// Roll to the bottom
					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						/*
						    When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
						    Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
						 */
						if (window.scroll_status.loading_lock === true) {
							return;
						}
						window.scroll_status.loading_lock = true;

						// Show a loading spinner
						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`)
							.insertBefore('#readme_md');
						mdui.updateSpinners();
						// mdui.mutation();

						let $list = $('#list');
						requestListPath(path, {
								password: prevReqParams['password'],
								page_token: $list.data('nextPageToken'),
								// Request next page
								page_index: $list.data('curPageIndex') + 1
							},
							successResultCallback,
							// The password is the same as before. No authError
							null
						)
					}
				});
				window.scroll_status.event_bound = true
			}
		}

		// After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false
		}
	}

	// Start requesting data from page 1
	requestListPath(path, {
			password: password
		},
		successResultCallback,
		function (path) {
			$('#spinner').remove();
			var pass = prompt("Directory encryption, please enter the password", "");
			localStorage.setItem('password' + path, pass);
			if (pass != null && pass != "") {
				list(path);
			} else {
				history.go(-1);
			}
		});
}

/**
 * Append the data of the requested new page to the list
 * @param path
 * @param files request result
 */
function append_files_to_list(path, files) {
	var $list = $('#list');
	// Is it the last page of data?
	var is_lastpage_loaded = null === $list.data('nextPageToken');
	var is_firstpage = '0' == $list.data('curPageIndex');

	html = "";
	let targetFiles = [];
	for (i in files) {
		var item = files[i];
		var p = path + item.name + '/';
		if (item['size'] == undefined) {
			item['size'] = "";
		}

		item['modifiedTime'] = utc2beijing(item['modifiedTime']);
		item['size'] = formatFileSize(item['size']);
		if (item['mimeType'] == 'application/vnd.google-apps.folder') {
			html += `<a href="${p}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eba600"></stop><stop offset="1" stop-color="#c28200"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30	c0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset="1" stop-color="#fec52b"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26	c0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path></svg> ${item.name}<span class="badge-info badge-pill float-right csize"> ${item['size']}</span><span class="badge-primary badge-pill float-right cmtime">${item['modifiedTime']}</span></a>`;
		} else {
			var p = path + item.name;
			var pn = path + item.name;
			const filepath = path + item.name;
			var c = "file";
			// README is displayed after the last page is loaded, otherwise it will affect the scroll event
			if (is_lastpage_loaded && item.name == "README.md") {
				get_file(p, item, function (data) {
					markdown("#readme_md", data);
          			$("img").addClass("img-fluid")
					
					//Remove .img-fluid from logo
		  			let logoElement = document.querySelector('.mainLogo');
		  			logoElement.classList.remove('img-fluid');
				});
			}
			if (item.name == "HEAD.md") {
				get_file(p, item, function (data) {
					markdown("#head_md", data);
					$("img").addClass("img-fluid")
					
					//Remove .img-fluid from logo
					let logoElement = document.querySelector('.mainLogo');
					logoElement.classList.remove('img-fluid');
				});
			}
			var ext = p.split('.').pop().toLowerCase();
			if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
				targetFiles.push(filepath);
				pn += "?a=view";
				c += " view";
			}
			html += `<div class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><a class="list-group-item-action" href="${pn}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"></path><linearGradient id="F8F33TU9HxDNWNbQYRyY3a" x1="28.529" x2="33.6" y1="15.472" y2="10.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#F8F33TU9HxDNWNbQYRyY3a)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"></path></svg> ${item.name}</a><a href="${p}"><img class="float-right" src="https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Bhadoo-Drive-Index@2.0.7/images/download-file.svg" width="25px"></a><span class="badge-info badge-pill float-right csize"> ${item['size']}</span><span class="badge-primary badge-pill float-right cmtime">${item['modifiedTime']}</span></div>`;
		}
	}

	/*let targetObj = {};
	targetFiles.forEach((myFilepath, myIndex) => {
	    if (!targetObj[myFilepath]) {
	        targetObj[myFilepath] = {
	            filepath: myFilepath,
	            prev: myIndex === 0 ? null : targetFiles[myIndex - 1],
	            next: myIndex === targetFiles.length - 1 ? null : targetFiles[myIndex + 1],
	        }
	    }
	})
	// console.log(targetObj)
	if (Object.keys(targetObj).length) {
	    localStorage.setItem(path, JSON.stringify(targetObj));
	    // console.log(path)
	}*/

	if (targetFiles.length > 0) {
		let old = localStorage.getItem(path);
		let new_children = targetFiles;
		// Reset on page 1; otherwise append
		if (!is_firstpage && old) {
			let old_children;
			try {
				old_children = JSON.parse(old);
				if (!Array.isArray(old_children)) {
					old_children = []
				}
			} catch (e) {
				old_children = [];
			}
			new_children = old_children.concat(targetFiles)
		}

		localStorage.setItem(path, JSON.stringify(new_children))
	}

	// When it is page 1, remove the horizontal loading bar
	$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
	// When it is the last page, count and display the total number of items
	if (is_lastpage_loaded) {
		$('#count').removeClass('mdui-hidden').find('.number').text($list.find('li.mdui-list-item').length);
	}
}

/**
 * Render the search results list. There is a lot of repetitive code, but there are different logics in it.
 */
function render_search_result_list() {
	var content = `
  <div class="container"><br>
  <div class="card">
  <h5 class="card-header">Resultados encontrados</h5>
  <div id="list" class="list-group">
  </div>
  </div>
  <div class="card">
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
  </div>
  </div>
  `;
	$('#content').html(content);

	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`);
	$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	/**
	 * Callback after successful search request returns data
	 * The result returned by @param res (object)
	 * @param path the requested path
	 * @param prevReqParams parameters used in request
	 */
	function searchSuccessCallback(res, prevReqParams) {

		// Temporarily store nextPageToken and currentPageIndex in the list element
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		// Remove loading spinner
		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			// If it is the last page, unbind the scroll event, reset scroll_status, and append the data
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			append_search_result_to_list(res['data']['files']);
		} else {
			// If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
			append_search_result_to_list(res['data']['files']);
			if (window.scroll_status.event_bound !== true) {
				// Bind event, if not yet bound
				$(window).on('scroll', function () {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();
					// Roll to the bottom
					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						/*
     When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
                 Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
             */
						if (window.scroll_status.loading_lock === true) {
							return;
						}
						window.scroll_status.loading_lock = true;

						// Show a loading spinner
						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Carregando...</span></div></div>`)
							.insertBefore('#readme_md');
						mdui.updateSpinners();
						// mdui.mutation();

						let $list = $('#list');
						requestSearch({
								q: window.MODEL.q,
								page_token: $list.data('nextPageToken'),
								// Request next page
								page_index: $list.data('curPageIndex') + 1
							},
							searchSuccessCallback
						)
					}
				});
				window.scroll_status.event_bound = true
			}
		}

		// After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false
		}
	}

	// Start requesting data from page 1
	requestSearch({
		q: window.MODEL.q
	}, searchSuccessCallback);
}

/**
 * Append a new page of search results
 * @param files
 */
function append_search_result_to_list(files) {
	var cur = window.current_drive_order || 0;
	var $list = $('#list');
	// Is it the last page of data?
	var is_lastpage_loaded = null === $list.data('nextPageToken');
	// var is_firstpage = '0' == $list.data('curPageIndex');

	html = "";

	for (i in files) {
		var item = files[i];
		var p = '/' + cur + ':/' + item.name + '/';
		if (item['size'] == undefined) {
			item['size'] = "";
		}

		item['modifiedTime'] = utc2beijing(item['modifiedTime']);
		item['size'] = formatFileSize(item['size']);
		if (item['mimeType'] == 'application/vnd.google-apps.folder') {
			html += `<a onclick="onSearchResultItemClick(this)" id="${item['id']}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqa" x1="24" x2="24" y1="6.708" y2="14.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eba600"></stop><stop offset="1" stop-color="#c28200"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqa)" d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7L5,7C3.895,7,3,7.895,3,9l0,30	c0,1.105,0.895,2,2,2l38,0c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2l-17.172,0C25.298,11,24.789,10.789,24.414,10.414z"></path><linearGradient id="WQEfvoQAcpQgQgyjQQ4Hqb" x1="24" x2="24" y1="10.854" y2="40.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset="1" stop-color="#fec52b"></stop></linearGradient><path fill="url(#WQEfvoQAcpQgQgyjQQ4Hqb)" d="M21.586,14.414l3.268-3.268C24.947,11.053,25.074,11,25.207,11H43c1.105,0,2,0.895,2,2v26	c0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V15.5C3,15.224,3.224,15,3.5,15h16.672C20.702,15,21.211,14.789,21.586,14.414z"></path></svg> ${item.name}<span class="badge-info badge-pill float-right csize"> ${item['size']}</span><span class="badge-primary badge-pill float-right cmtime">${item['modifiedTime']}</span></a>`;
		} else {
			var p = '/' + cur + ':/' + item.name;
			var c = "file";
			var ext = item.name.split('.').pop().toLowerCase();
			if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
				p += "?a=view";
				c += " view";
			}
			html += `<a onclick="onSearchResultItemClick(this)" id="${item['id']}" gd-type="${item.mimeType}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"></path><linearGradient id="F8F33TU9HxDNWNbQYRyY3a" x1="28.529" x2="33.6" y1="15.472" y2="10.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6"></stop><stop offset="1" stop-color="#297cd2"></stop></linearGradient><path fill="url(#F8F33TU9HxDNWNbQYRyY3a)" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"></path></svg> ${item.name}<span class="badge-info badge-pill float-right csize"> ${item['size']}</span><span class="badge-primary badge-pill float-right cmtime">${item['modifiedTime']}</span></a>`;
		}
	}

	// When it is page 1, remove the horizontal loading bar
	$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
	// When it is the last page, count and display the total number of items
	if (is_lastpage_loaded) {
		$('#count').removeClass('mdui-hidden').find('.number').text($list.find('li.mdui-list-item').length);
	}
}

/**
 * Search result item click event
 * @param a_ele Clicked element
 */
function onSearchResultItemClick(a_ele) {
	var me = $(a_ele);
	var can_preview = me.hasClass('view');
	var cur = window.current_drive_order;
	var dialog = mdui.dialog({
		title: '',
		content: '<div class="mdui-text-center mdui-typo-title mdui-m-b-1"><svg width="1.5em" height="1.5em" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m347.286 203.876c-221.19-75.589-72.046-166.142 3.02-201.853 1.026-.487.677-2.023-.459-2.023h-53.55c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745h349.478c46.736-66.708 143.573-240.144-55.352-308.124z" fill="#665e68"/><path d="m53.16 512h76.776c91.568-63.118 231.714-188.068 82.869-285.189-124.238-81.064.874-176.113 89.349-226.811h-5.857c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745z" fill="#554e56"/><g><path d="m217.804 71.339c-2.519 0-4.988-1.229-6.473-3.493-2.342-3.571-1.346-8.364 2.226-10.706 3.419-2.242 5.57-3.471 5.659-3.522 3.71-2.115 8.433-.82 10.546 2.891 2.113 3.709.82 8.428-2.887 10.543-.051.029-1.892 1.087-4.838 3.019-1.307.858-2.778 1.267-4.233 1.268z" fill="#dfebfa"/></g><g fill="#dfebfa"><path d="m291.42 441.935c-1.882 0-3.768-.683-5.257-2.064-3.131-2.904-3.314-7.797-.409-10.927 2.814-3.033 5.559-6.119 8.16-9.173 2.77-3.251 7.65-3.642 10.9-.872 3.251 2.769 3.642 7.649.872 10.9-2.742 3.219-5.634 6.47-8.596 9.663-1.523 1.642-3.594 2.473-5.67 2.473z"/><path d="m324.191 398.39c-1.307 0-2.632-.332-3.846-1.03-3.703-2.128-4.978-6.855-2.85-10.557 2.045-3.559 3.931-7.135 5.603-10.63 1.843-3.852 6.46-5.481 10.312-3.638 3.853 1.843 5.481 6.46 3.638 10.312-1.84 3.845-3.907 7.77-6.147 11.663-1.43 2.487-4.033 3.88-6.71 3.88z"/><path d="m341.594 347.113c-.205 0-.412-.008-.62-.025-4.257-.338-7.435-4.062-7.097-8.319.166-2.085.249-4.179.249-6.225.001-1.739-.06-3.49-.18-5.204-.299-4.26 2.913-7.955 7.172-8.254 4.25-.302 7.955 2.912 8.254 7.172.145 2.074.219 4.189.218 6.288 0 2.45-.1 4.956-.298 7.445-.32 4.049-3.705 7.122-7.698 7.122z"/><path d="m328.086 295.326c-2.508 0-4.969-1.219-6.457-3.468-2.069-3.129-4.429-6.244-7.016-9.259-2.78-3.241-2.407-8.122.834-10.903s8.122-2.408 10.903.834c3.004 3.501 5.755 7.134 8.178 10.797 2.355 3.562 1.378 8.359-2.184 10.715-1.313.869-2.794 1.284-4.258 1.284z"/><path d="m288.565 258.262c-1.436 0-2.888-.399-4.183-1.235-3.293-2.124-6.791-4.234-10.396-6.272-3.718-2.101-5.027-6.819-2.926-10.536 2.101-3.718 6.819-5.027 10.536-2.926 3.865 2.185 7.622 4.452 11.166 6.737 3.589 2.315 4.622 7.1 2.308 10.689-1.478 2.293-3.966 3.543-6.505 3.543z"/><path d="m240.155 233.18c-1.176 0-2.369-.269-3.49-.837-3.918-1.986-7.749-4.019-11.385-6.041-3.732-2.076-5.075-6.784-2.999-10.516 2.076-3.733 6.783-5.077 10.516-2.999 3.464 1.927 7.118 3.865 10.86 5.762 3.809 1.931 5.332 6.584 3.401 10.393-1.362 2.688-4.082 4.238-6.903 4.238z"/><path d="m194.337 203.784c-1.774 0-3.556-.607-5.012-1.847-3.501-2.984-6.776-6.045-9.733-9.097-2.972-3.067-2.894-7.962.174-10.933 3.068-2.972 7.962-2.893 10.933.174 2.616 2.7 5.529 5.422 8.657 8.088 3.25 2.77 3.64 7.65.869 10.9-1.529 1.792-3.702 2.715-5.888 2.715z"/><path d="m164.402 159.356c-3.578 0-6.79-2.497-7.558-6.138-.88-4.172-1.326-8.433-1.326-12.664-.001-.547.007-1.099.022-1.651.117-4.269 3.684-7.617 7.941-7.518 4.269.117 7.635 3.672 7.518 7.941-.011.406-.017.812-.016 1.22 0 3.168.334 6.355.993 9.48.881 4.178-1.791 8.28-5.97 9.161-.539.115-1.076.169-1.604.169z"/><path d="m177.873 108.162c-1.572 0-3.158-.478-4.528-1.47-3.459-2.504-4.233-7.339-1.728-10.797 2.524-3.486 5.372-6.991 8.465-10.417 2.86-3.169 7.749-3.422 10.921-.559 3.17 2.861 3.42 7.75.559 10.921-2.722 3.016-5.218 6.086-7.419 9.125-1.512 2.088-3.874 3.197-6.27 3.197z"/></g><g><path d="m256.006 474.787c-2.336 0-4.644-1.054-6.165-3.059-2.581-3.402-1.916-8.252 1.486-10.834.014-.011 1.714-1.305 4.569-3.666 3.291-2.722 8.166-2.26 10.886 1.03 2.722 3.291 2.26 8.165-1.03 10.886-3.133 2.592-4.999 4.01-5.077 4.069-1.398 1.061-3.04 1.574-4.669 1.574z" fill="#dfebfa"/></g><path d="m364.982 185.337c-210.789-65.146-89.169-139.33-11.125-177.542 3.647-1.785 2.486-7.795-1.503-7.795h-2.9c-73.415 34.202-232.815 126.815-7.318 203.876 198.923 67.98 102.087 241.416 55.351 308.124h39.609c9.916 0 19.026-6.013 23.71-15.659 44.904-92.457 86.811-254.559-95.824-311.004z" fill="#ffd301"/><g><g><path d="m155.795 233.255c-102.413-62.706-37.443-134.33 38.828-184.208-85.326 47.849-183.183 126.492-68.476 196.724 134.351 82.261-6.581 185.797-109.257 248.736-7.628 4.677-4.608 17.493 4.119 17.493h34.211c89.126-54.478 259.427-181.484 100.575-278.745z" fill="#ffc20c"/></g></g></g></svg> Obtendo o caminho do arquivo...</div><div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Carregando...</span></div></div>',
		// content: '<div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',
		history: false,
		modal: true,
		closeOnEsc: true
	});
	mdui.updateSpinners();

	// Request a path
	$.post(`/${cur}:id2path`, {
		id: a_ele.id
	}, function (data) {
		if (data) {
			dialog.close();
			var href = `/${cur}:${data}${can_preview ? '?a=view' : ''}`;
			if (href.endsWith("/")) {
				hrefurl = href;
			} else {
				hrefurl = href + '?a=view';
			}
			dialog = mdui.dialog({
				title: '<svg width="1em" height="1em" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m347.286 203.876c-221.19-75.589-72.046-166.142 3.02-201.853 1.026-.487.677-2.023-.459-2.023h-53.55c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745h349.478c46.736-66.708 143.573-240.144-55.352-308.124z" fill="#665e68"/><path d="m53.16 512h76.776c91.568-63.118 231.714-188.068 82.869-285.189-124.238-81.064.874-176.113 89.349-226.811h-5.857c-8.469 0-16.838 1.96-24.582 5.745-85.039 41.566-256.502 142.695-117.98 227.51 158.851 97.261-11.45 224.267-100.575 278.745z" fill="#554e56"/><g><path d="m217.804 71.339c-2.519 0-4.988-1.229-6.473-3.493-2.342-3.571-1.346-8.364 2.226-10.706 3.419-2.242 5.57-3.471 5.659-3.522 3.71-2.115 8.433-.82 10.546 2.891 2.113 3.709.82 8.428-2.887 10.543-.051.029-1.892 1.087-4.838 3.019-1.307.858-2.778 1.267-4.233 1.268z" fill="#dfebfa"/></g><g fill="#dfebfa"><path d="m291.42 441.935c-1.882 0-3.768-.683-5.257-2.064-3.131-2.904-3.314-7.797-.409-10.927 2.814-3.033 5.559-6.119 8.16-9.173 2.77-3.251 7.65-3.642 10.9-.872 3.251 2.769 3.642 7.649.872 10.9-2.742 3.219-5.634 6.47-8.596 9.663-1.523 1.642-3.594 2.473-5.67 2.473z"/><path d="m324.191 398.39c-1.307 0-2.632-.332-3.846-1.03-3.703-2.128-4.978-6.855-2.85-10.557 2.045-3.559 3.931-7.135 5.603-10.63 1.843-3.852 6.46-5.481 10.312-3.638 3.853 1.843 5.481 6.46 3.638 10.312-1.84 3.845-3.907 7.77-6.147 11.663-1.43 2.487-4.033 3.88-6.71 3.88z"/><path d="m341.594 347.113c-.205 0-.412-.008-.62-.025-4.257-.338-7.435-4.062-7.097-8.319.166-2.085.249-4.179.249-6.225.001-1.739-.06-3.49-.18-5.204-.299-4.26 2.913-7.955 7.172-8.254 4.25-.302 7.955 2.912 8.254 7.172.145 2.074.219 4.189.218 6.288 0 2.45-.1 4.956-.298 7.445-.32 4.049-3.705 7.122-7.698 7.122z"/><path d="m328.086 295.326c-2.508 0-4.969-1.219-6.457-3.468-2.069-3.129-4.429-6.244-7.016-9.259-2.78-3.241-2.407-8.122.834-10.903s8.122-2.408 10.903.834c3.004 3.501 5.755 7.134 8.178 10.797 2.355 3.562 1.378 8.359-2.184 10.715-1.313.869-2.794 1.284-4.258 1.284z"/><path d="m288.565 258.262c-1.436 0-2.888-.399-4.183-1.235-3.293-2.124-6.791-4.234-10.396-6.272-3.718-2.101-5.027-6.819-2.926-10.536 2.101-3.718 6.819-5.027 10.536-2.926 3.865 2.185 7.622 4.452 11.166 6.737 3.589 2.315 4.622 7.1 2.308 10.689-1.478 2.293-3.966 3.543-6.505 3.543z"/><path d="m240.155 233.18c-1.176 0-2.369-.269-3.49-.837-3.918-1.986-7.749-4.019-11.385-6.041-3.732-2.076-5.075-6.784-2.999-10.516 2.076-3.733 6.783-5.077 10.516-2.999 3.464 1.927 7.118 3.865 10.86 5.762 3.809 1.931 5.332 6.584 3.401 10.393-1.362 2.688-4.082 4.238-6.903 4.238z"/><path d="m194.337 203.784c-1.774 0-3.556-.607-5.012-1.847-3.501-2.984-6.776-6.045-9.733-9.097-2.972-3.067-2.894-7.962.174-10.933 3.068-2.972 7.962-2.893 10.933.174 2.616 2.7 5.529 5.422 8.657 8.088 3.25 2.77 3.64 7.65.869 10.9-1.529 1.792-3.702 2.715-5.888 2.715z"/><path d="m164.402 159.356c-3.578 0-6.79-2.497-7.558-6.138-.88-4.172-1.326-8.433-1.326-12.664-.001-.547.007-1.099.022-1.651.117-4.269 3.684-7.617 7.941-7.518 4.269.117 7.635 3.672 7.518 7.941-.011.406-.017.812-.016 1.22 0 3.168.334 6.355.993 9.48.881 4.178-1.791 8.28-5.97 9.161-.539.115-1.076.169-1.604.169z"/><path d="m177.873 108.162c-1.572 0-3.158-.478-4.528-1.47-3.459-2.504-4.233-7.339-1.728-10.797 2.524-3.486 5.372-6.991 8.465-10.417 2.86-3.169 7.749-3.422 10.921-.559 3.17 2.861 3.42 7.75.559 10.921-2.722 3.016-5.218 6.086-7.419 9.125-1.512 2.088-3.874 3.197-6.27 3.197z"/></g><g><path d="m256.006 474.787c-2.336 0-4.644-1.054-6.165-3.059-2.581-3.402-1.916-8.252 1.486-10.834.014-.011 1.714-1.305 4.569-3.666 3.291-2.722 8.166-2.26 10.886 1.03 2.722 3.291 2.26 8.165-1.03 10.886-3.133 2.592-4.999 4.01-5.077 4.069-1.398 1.061-3.04 1.574-4.669 1.574z" fill="#dfebfa"/></g><path d="m364.982 185.337c-210.789-65.146-89.169-139.33-11.125-177.542 3.647-1.785 2.486-7.795-1.503-7.795h-2.9c-73.415 34.202-232.815 126.815-7.318 203.876 198.923 67.98 102.087 241.416 55.351 308.124h39.609c9.916 0 19.026-6.013 23.71-15.659 44.904-92.457 86.811-254.559-95.824-311.004z" fill="#ffd301"/><g><g><path d="m155.795 233.255c-102.413-62.706-37.443-134.33 38.828-184.208-85.326 47.849-183.183 126.492-68.476 196.724 134.351 82.261-6.581 185.797-109.257 248.736-7.628 4.677-4.608 17.493 4.119 17.493h34.211c89.126-54.478 259.427-181.484 100.575-278.745z" fill="#ffc20c"/></g></g></g></svg> Caminho do arquivo',
				content: `<a class="btn btn-info" href="${hrefurl}">Abrir</a> <a class="btn btn-secondary" href="${hrefurl}" target="_blank">Abrir em Nova aba</a> <button class="btn btn-danger" mdui-dialog-cancel>Cancelar</button><script>dialog.addEventListener('cancel.mdui.dialog', function () {
  console.log('cancel');
});</script>`,
				history: false,
				modal: true,
				closeOnEsc: true
			});
			return;
		}
		dialog.close();
		dialog = mdui.dialog({
			title: 'Falha ao obter o caminho do arquivo.',
			content: 'Pode ser porque este arquivo não existe ou porque o indexador não tem permissão para acessá-lo. Por favor, tire um print desta tela e entre em contato conosco clicando em "Relatar problema" no menu principal!',
			history: false,
			modal: true,
			closeOnEsc: true,
			buttons: [{
				text: 'WTF ???'
			}]
		});
	})
}

function get_file(path, file, callback) {
	var key = "file_path_" + path + file['modifiedTime'];
	var data = localStorage.getItem(key);
	if (data != undefined) {
		return callback(data);
	} else {
		$.get(path, function (d) {
			localStorage.setItem(key, d);
			callback(d);
		});
	}
}


// File display ?a=view
function file(path) {
	var name = path.split('/').pop();
	var ext = name.split('.').pop().toLowerCase().replace(`?a=view`, "").toLowerCase();
	//if ('|pdf|docx|docm|dot|dotx|dotm|rtf|odt|xlsx|xlsm|xlt|xltx|xltm|ods|csv|tsv|tab|pptx|pptm|pps|ppsx|ppsm|pot|potx|potm|odp|wmf|emf|doc|xls|ppt|' === ext) return file_pdf(path);
	
	if ("|pdf|".indexOf(`|${ext}|`) >= 0) {
		return file_pdf(path);
	}

	if ("|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${ext}|`) >= 0) {
		return file_code(path);
	}

	if ("|mp4|webm|avi|".indexOf(`|${ext}|`) >= 0) {
		return file_video(path);
	}

	if ("|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
		return file_video(path);
	}

	if ("|mp3|flac|wav|ogg|m4a|".indexOf(`|${ext}|`) >= 0) {
		return file_audio(path);
	}

	if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
		return file_image(path);
	}
	else {
		return file_others(path);
	}
	
}

// Document display |zip|.exe/others direct downloads
function file_others(path) {
	var type = {
		"zip": "zip",
		"exe": "exe",
		"rar": "rar",
	};
	var name = path.split('/').pop();
	var ext = name.split('.').pop().toLowerCase();
	var href = window.location.origin + path;
	var content = `
<div class="container"><br>
<div class="card">
<div class="card-body">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
</div>
<p class="card-text text-center"><a href="${href}" class="btn btn-primary">Download</a></p><br>`;
	$('#content').html(content);
}

// Document display |html|php|css|go|java|js|json|txt|sh|md|
function file_code(path) {
	var type = {
		"html": "html",
		"php": "php",
		"css": "css",
		"go": "golang",
		"java": "java",
		"js": "javascript",
		"json": "json",
		"txt": "Text",
		"sh": "sh",
		"md": "Markdown",
	};
	var name = path.split('/').pop();
	var ext = name.split('.').pop().toLowerCase();
	var href = window.location.origin + path;
	var content = `
<div class="container"><br>
<div class="card">
<div class="card-body">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
<code id="editor" class="card-text"></code>
</div>
<p class="card-text text-center"><a href="${href}" class="btn btn-primary">Download</a></p><br>`;
	$('#content').html(content);

	$.get(path, function (data) {
		$('#editor').html($('<div/><div/><div/>').text(data).html());
		var code_type = "Text";
		if (type[ext] != undefined) {
			code_type = type[ext];
		}
	});
}

function copyToClipboard(str) {
	const $temp = $("<input>");
	$("body").append($temp);
	$temp.val(str).select();
	document.execCommand("copy");
	$temp.remove();
}

// Document display video |mp4|webm|avi|
function file_video(path) {
	const url = window.location.origin + path;
	const content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <video width="100%" height="100%" id="player" controls><source type="video/mp4" src="${url}"/></video>
  </div>
	${UI.disable_player ? '<style>#mep_0{display:none;}</style>' : ''}
  <script type="text/javascript">const player = new Plyr('#player');</script>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
  `;
	$('#content').html(content);
}

// File display Audio |mp3|flac|m4a|wav|ogg|
function file_audio(path) {
	var url = window.location.origin + path;
	var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <audio id="player" width="100%" controls>
    <source src="${url}" type="audio/ogg">
    <source src="${url}" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>
  </div>
	${UI.disable_player ? '<style>#mep_0{display:none;}</style>' : ''}
  <script type="text/javascript">const player = new Plyr('#player');</script>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
  `;
	$('#content').html(content);
}

// Document display |pdf|docx|docm|dot|dotx|dotm|rtf|odt|xlsx|xlsm|xlt|xltx|xltm|ods|csv|tsv|tab|pptx|pptm|pps|ppsx|ppsm|pot|potx|potm|odp|wmf|emf|doc|xls|ppt|
function file_pdf(path) {
	const url = window.location.origin + path;
	const inline_url = `${url}?inline=true`
	const file_name = decodeURI(path.slice(path.lastIndexOf('/') + 1, path.length))
	var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  </div>

  <object data-v-59e039ae="" data="${inline_url}" type="application/pdf" name="file.pdf" height="600px">
  	<embed class="embed-responsive" data-v-59e039ae="" src="${inline_url}" type="application/pdf" height="600px">
  </object>
  
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
  `;
  //$('#content').html(content);
	$('#content').removeClass('mdui-container').addClass('mdui-container-fluid').css({
		padding: 0
	}).html(content);
}

// image display
function file_image(path) {
	var url = window.location.origin + path;
	var durl = decodeURI(url);
	// console.log(window.location.pathname)
	const currentPathname = window.location.pathname
	const lastIndex = currentPathname.lastIndexOf('/');
	const fatherPathname = currentPathname.slice(0, lastIndex + 1);
	// console.log(fatherPathname)
	let target_children = localStorage.getItem(fatherPathname);
	// console.log(`fatherPathname: ${fatherPathname}`);
	// console.log(target_children)
	let targetText = '';
	if (target_children) {
		try {
			target_children = JSON.parse(target_children);
			if (!Array.isArray(target_children)) {
				target_children = []
			}
		} catch (e) {
			console.error(e);
			target_children = [];
		}
		// <div id="btns" >
		//             ${targetObj[path].prev ? `<span id="leftBtn" data-direction="left" data-filepath="${targetObj[path].prev}"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Prev</span></span>` : `<span style="cursor: not-allowed;color: rgba(0,0,0,0.2);margin-bottom:20px;"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Prev</span></span>`}
		//             ${targetObj[path].next ? `<span id="rightBtn" data-direction="right"  data-filepath="${targetObj[path].next}"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Next</span></span>` : `<span style="cursor: not-allowed;color: rgba(0,0,0,0.2);"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Prev</span></span>`}
		// </div>
	}
	var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <img src="${url}" width="50%">
  </div>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
    `;
	// my code
	$('#content').html(content);
	$('#leftBtn, #rightBtn').click((e) => {
		let target = $(e.target);
		if (['I', 'SPAN'].includes(e.target.nodeName)) {
			target = $(e.target).parent();
		}
		const filepath = target.attr('data-filepath');
		const direction = target.attr('data-direction');
		//console.log(`${direction}Turn page ${filepath}`);
		file(filepath)
	});
}


// Time conversion
function utc2beijing(utc_datetime) {
	// Convert to normal time format year-month-day hour: minute: second
	var T_pos = utc_datetime.indexOf('T');
	var Z_pos = utc_datetime.indexOf('Z');
	var year_month_day = utc_datetime.substr(0, T_pos);
	var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
	var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

	// Processing becomes timestamp
	timestamp = new Date(Date.parse(new_datetime));
	timestamp = timestamp.getTime();
	timestamp = timestamp / 1000;

	// 8 hours increase, Beijing time is eight more time zones than UTC time
	var unixtimestamp = timestamp + 5.5 * 60 * 60;

	// Timestamp to time
	var unixtimestamp = new Date(unixtimestamp * 1000);
	var year = 1900 + unixtimestamp.getYear();
	var month = "0" + (unixtimestamp.getMonth() + 1);
	var date = "0" + unixtimestamp.getDate();
	var hour = "0" + unixtimestamp.getHours();
	var minute = "0" + unixtimestamp.getMinutes();
	var second = "0" + unixtimestamp.getSeconds();
	return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length) +
		" " + hour.substring(hour.length - 2, hour.length) + ":" +
		minute.substring(minute.length - 2, minute.length) + ":" +
		second.substring(second.length - 2, second.length);
}

// bytes adaptive conversion to KB, MB, GB
function formatFileSize(bytes) {
	if (bytes >= 1000000000) {
		bytes = (bytes / 1000000000).toFixed(2) + ' GB';
	} else if (bytes >= 1000000) {
		bytes = (bytes / 1000000).toFixed(2) + ' MB';
	} else if (bytes >= 1000) {
		bytes = (bytes / 1000).toFixed(2) + ' KB';
	} else if (bytes > 1) {
		bytes = bytes + ' bytes';
	} else if (bytes == 1) {
		bytes = bytes + ' byte';
	} else {
		bytes = '';
	}
	return bytes;
}

String.prototype.trim = function (char) {
	if (char) {
		return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
	}
	return this.replace(/^\s+|\s+$/g, '');
};


// README.md HEAD.md support
function markdown(el, data) {
	if (window.md == undefined) {
		//$.getScript('https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js',function(){
		window.md = window.markdownit();
		markdown(el, data);
		//});
	} else {
		var html = md.render(data);
		$(el).show().html(html);
	}
}

// Listen for fallback events
window.onpopstate = function () {
	var path = window.location.pathname;
	render(path);
}


$(function () {
	init();
	var path = window.location.pathname;
	/*$("body").on("click", '.folder', function () {
	    var url = $(this).attr('href');
	    history.pushState(null, null, url);
	    render(url);
	    return false;
	});
	$("body").on("click", '.view', function () {
	    var url = $(this).attr('href');
	    history.pushState(null, null, url);
	    render(url);
	    return false;
	});*/

	render(path);
});
