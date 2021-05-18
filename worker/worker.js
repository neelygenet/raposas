/*  ░██████╗░██████╗░██╗░░░░░░░░██╗░██████╗░░░░█████╗░██████╗░░██████╗░
    ██╔════╝░██╔══██╗██║░░░░░░░░██║██╔════╝░░░██╔══██╗██╔══██╗██╔════╝░
    ██║░░██╗░██║░░██║██║░░░░░░░░██║╚█████╗░░░░██║░░██║██████╔╝██║░░██╗░
    ██║░░╚██╗██║░░██║██║░░░██╗░░██║░╚═══██╗░░░██║░░██║██╔══██╗██║░░╚██╗
    ╚██████╔╝██████╔╝██║██╗╚█████╔╝██████╔╝██╗╚█████╔╝██║░░██║╚██████╔╝
    ░╚═════╝░╚═════╝░╚═╝╚═╝░╚════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
                             ｖ ２．０．１８
A Script Redesigned by Parveen Bhadoo from GOIndex at https://github.com/ParveenBhadooOfficial/Google-Drive-Index */

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.
const serviceaccounts = [];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)];

const authConfig = {
    "siteName": "Raposas", // Website name
    "client_id": "", // Client id from Google Cloud Console
    "client_secret": "", // Client Secret from Google Cloud Console
    "refresh_token": "", // Authorize token
    "service_account": true, // true if you're using Service Account instead of user account
    "service_account_json": randomserviceaccount, // don't touch this one
    "files_list_page_size": 50,
    "search_result_list_page_size": 50,
    "enable_cors_file_down": false,
    "enable_password_file_verify": true, // support for .password file
    "roots":[
      {
          "id": "",
          "name": "Arquivos Principais",
          "protect_file_link": false,
         // "auth": {"username":"password"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "0AKX4zntvxFxFUk9PVA",
          "name": "Contribuições",
          "protect_file_link": false,
         // "auth": {"username":"password", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};


/*
███████╗██████╗░██╗████████╗  ████████╗██╗░░██╗███████╗░██████╗███████╗
██╔════╝██╔══██╗██║╚══██╔══╝  ╚══██╔══╝██║░░██║██╔════╝██╔════╝██╔════╝
█████╗░░██║░░██║██║░░░██║░░░  ░░░██║░░░███████║█████╗░░╚█████╗░█████╗░░
██╔══╝░░██║░░██║██║░░░██║░░░  ░░░██║░░░██╔══██║██╔══╝░░░╚═══██╗██╔══╝░░
███████╗██████╔╝██║░░░██║░░░  ░░░██║░░░██║░░██║███████╗██████╔╝███████╗
╚══════╝╚═════╝░╚═╝░░░╚═╝░░░  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚══════╝
██╗░░░██╗░█████╗░██╗░░░░░██╗░░░██╗███████╗░██████╗
██║░░░██║██╔══██╗██║░░░░░██║░░░██║██╔════╝██╔════╝
╚██╗░██╔╝███████║██║░░░░░██║░░░██║█████╗░░╚█████╗░
░╚████╔╝░██╔══██║██║░░░░░██║░░░██║██╔══╝░░░╚═══██╗
░░╚██╔╝░░██║░░██║███████╗╚██████╔╝███████╗██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░╚═════╝░╚══════╝╚═════╝░*/

const uiConfig = {
    "version": "v1.3.0", // don't touch this one. get latest code using generator at https://generator.driveindex.ga
    "bootswatch_version": "5.0.1",
    "logo_image": true, // true if you're using image link in next option.
    "logo_height": "64px", // only if logo_image is true
    "logo_width": "64px", // only if logo_image is true
    "favicon": "https://cdn.jsdelivr.net/gh/neelygenet/raposas@v1.3.0/images/logo.png",
    // if logo is true then link otherwise just text for name
    "logo_link_name": "https://cdn.jsdelivr.net/gh/neelygenet/raposas@v1.3.0/images/logo.png",
    "fixed_header": true, // If you want the footer to be flexible or fixed.
    "header_padding": "60", // Value 60 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
    "fixed_footer": false, // If you want the footer to be flexible or fixed.
    "header_style_class": "navbar-dark bg-primary", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
    "footer_style_class": "bg-primary", // bg-primary || bg-dark || bg-light
    "css_a_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "css_p_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "folder_text_color": "white", // Color Name or Hex Code eg. #ffffff
    "loading_spinner_class": "text-light", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
    "search_button_class": "btn-outline-success", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
    "path_nav_alert_class": "alert alert-primary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_view_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_count_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "copyright_year": "2021", // year of copyright, can be anything like 2015 - 2020 or just 2020
    "company_name": "Raposas", // Name next to copyright
    "credit": true, // Set this to true to give us credit
    "display_size": true, // Set this to false to hide display file size
    "display_time": false, // Set this to false to hide display modified time for folder and files
    "display_download": true, // Set this to false to hide download icon for folder and files on main index
    "disable_player": false, // Set this to true to hide audio and video players
    "disable_video_download": false, // Remove Download, Copy Button on Videos
    "second_domain_for_dl": false, // If you want to display other URL for Downloading to protect your main domain.
    "downloaddomain": "https://testing.fetchgoogleapi.workers.dev", // If "second_domain_for_dl": true then enter downloaddomain otherwise keep empty. eg. https://workers.workersname.workers.dev No Trailing '/'
    "poster": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@2.0.10/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
    "audioposter": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@2.0.10/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/gh/neelygenet/raposas", // If Project is Forked, then enter your Github repo
    "render_head_md": true, // Render Head.md
    "render_readme_md": true, // Render Readme.md
    "display_drive_link": false, // This will add a Link Button to Google Drive of that particular file.
    "plyr_io_version": "3.6.4", // Change plyr.io version in future when needed.
    "unauthorized_owner_link": "mailto:contato@raposas.net", // Unauthorized Error Page Link to Owner
    "unauthorized_owner_email": "contato@raposas.net", // Unauthorized Error Page Owner Email
};


/*
██████╗░░█████╗░  ███╗░░██╗░█████╗░████████╗  ███████╗██████╗░██╗████████╗
██╔══██╗██╔══██╗  ████╗░██║██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██║╚══██╔══╝
██║░░██║██║░░██║  ██╔██╗██║██║░░██║░░░██║░░░  █████╗░░██║░░██║██║░░░██║░░░
██║░░██║██║░░██║  ██║╚████║██║░░██║░░░██║░░░  ██╔══╝░░██║░░██║██║░░░██║░░░
██████╔╝╚█████╔╝  ██║░╚███║╚█████╔╝░░░██║░░░  ███████╗██████╔╝██║░░░██║░░░
╚═════╝░░╚════╝░  ╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░  ╚══════╝╚═════╝░╚═╝░░░╚═╝░░░
██████╗░███████╗██╗░░░░░░█████╗░░██╗░░░░░░░██╗
██╔══██╗██╔════╝██║░░░░░██╔══██╗░██║░░██╗░░██║
██████╦╝█████╗░░██║░░░░░██║░░██║░╚██╗████╗██╔╝
██╔══██╗██╔══╝░░██║░░░░░██║░░██║░░████╔═████║░
██████╦╝███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░
╚═════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░*/

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];

function html(current_drive_order = 0, model = {}) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <meta name="robots" content="index, follow" />
  <link rel="icon" href="${uiConfig.favicon}">
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  </script>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/dist/jquery.min.js"></script>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/dist/fontawesome.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootswatch@${uiConfig.bootswatch_version}/dist/slate/bootstrap.css" rel="stylesheet" crossorigin="anonymous">
  <style>
  a {
      color: ${uiConfig.css_a_tag_color};
  }
  p {
      color: ${uiConfig.css_p_tag_color};
  }
  </style>
  <script src="https://cdn.raposas.net/app.min.js"></script>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/dist/marked.min.js"></script>
</head>
<body>
</body>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/js/bootstrap.bundle.min.js"></script>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/dist/popper.min.js"></script>
</html>`;
};

const unauthorized = `<html>
<head><title>401 Unauthorized</title></head>
<body>
<center><h1>401 Unauthorized</h1></center>
<hr><center>raposas.net/2.0.18</center>
<hr><center>Please contact <a href="${uiConfig.unauthorized_owner_link}">Site Owner</a></center>
</body>
</html>`

const not_found = `<html>
<head><title>404 File Not Found</title></head>
<body>
<center><h1>404 File Not Found</h1></center>
<hr><center>raposas.net/2.0.18</center>
<hr><center>Please contact <a href="${uiConfig.unauthorized_owner_link}">Site Owner</a></center>
</body>
</html>`


const SearchFunction = {
    formatSearchKeyword: function(keyword) {
        let nothing = "";
        let space = " ";
        if (!keyword) return nothing;
        return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
            .replace(/[,，|(){}]/g, space)
            .trim()
    }

};

const DriveFixedTerms = new(class {
    default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
    gd_root_type = {
        user_drive: 0,
        share_drive: 1,
        sub_folder: 2
    };
    folder_mime_type = 'application/vnd.google-apps.folder';
})();

const JSONWebToken = {
    header: {
        alg: 'RS256',
        typ: 'JWT'
    },
    importKey: async function(pemKey) {
        var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
        return crypto.subtle.importKey('pkcs8', pemDER, {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256'
        }, false, ['sign']);
    },
    createSignature: async function(text, key) {
        const textBuffer = this.textUtils.stringToArrayBuffer(text);
        return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
    },
    generateGCPToken: async function(serviceAccount) {
        const iat = parseInt(Date.now() / 1000);
        var payload = {
            "iss": serviceAccount.client_email,
            "scope": "https://www.googleapis.com/auth/drive",
            "aud": "https://oauth2.googleapis.com/token",
            "exp": iat + 3600,
            "iat": iat
        };
        const encPayload = btoa(JSON.stringify(payload));
        const encHeader = btoa(JSON.stringify(this.header));
        var key = await this.importKey(serviceAccount.private_key);
        var signed = await this.createSignature(encHeader + "." + encPayload, key);
        return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
    },
    textUtils: {
        base64ToArrayBuffer: function(base64) {
            var binary_string = atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        },
        stringToArrayBuffer: function(str) {
            var len = str.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes.buffer;
        },
        arrayBufferToBase64: function(buffer) {
            let binary = '';
            let bytes = new Uint8Array(buffer);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }
    }
};

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    if (gds.length === 0) {
        for (let i = 0; i < authConfig.roots.length; i++) {
            const gd = new googleDrive(authConfig, i);
            await gd.init();
            gds.push(gd)
        }
        let tasks = [];
        gds.forEach(gd => {
            tasks.push(gd.initRootType());
        });
        for (let task of tasks) {
            await task;
        }
    }

    let gd;
    let url = new URL(request.url);
    let path = url.pathname;

    function redirectToIndexPage() {
        return new Response('', {
            status: 301,
            headers: {
                'Location': `${url.origin}/0:/`
            }
        });
    }

    if (path == '/') return redirectToIndexPage();
    if (path.toLowerCase() == '/arc-sw.js') {
        return fetch("https://arc.io/arc-sw.js")
    } else if (path.toLowerCase() == '/admin') {
        return Response.redirect("https://bit.ly/3sAxYwr", 301)
    } else if (path.toLowerCase() == '/update') {
        return Response.redirect("https://generator.driveindex.ga", 301)
    }

    const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
    const match = command_reg.exec(path);
    if (match) {
        const num = match.groups.num;
        const order = Number(num);
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
        for (const r = gd.basicAuthResponse(request); r;) return r;
        const command = match.groups.command;
        if (command === 'search') {
            if (request.method === 'POST') {
                return handleSearch(request, gd);
            } else {
                const params = url.searchParams;
                return new Response(html(gd.order, {
                    q: params.get("q").replace(/'/g, "").replace(/"/g, "") || '',
                    is_search_page: true,
                    root_type: gd.root_type
                }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    }
                });
            }
        } else if (command === 'id2path' && request.method === 'POST') {
            return handleId2Path(request, gd)
        }
    }

    const common_reg = /^\/\d+:\/.*$/g;
    try {
        if (!path.match(common_reg)) {
            return redirectToIndexPage();
        }
        let split = path.split("/");
        let order = Number(split[1].slice(0, -1));
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
    } catch (e) {
        return redirectToIndexPage()
    }

    const basic_auth_res = gd.basicAuthResponse(request);

    path = path.replace(gd.url_path_prefix, '') || '/';
    if (request.method == 'POST') {
        return basic_auth_res || apiRequest(request, gd);
    }

    let action = url.searchParams.get('a');

    if (path.substr(-1) == '/' || action != null) {
        return basic_auth_res || new Response(html(gd.order, {
            root_type: gd.root_type
        }), {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    } else {
        if (path.split('/').pop().toLowerCase() == ".password") {
            return basic_auth_res || new Response("", {
                status: 404
            });
        }
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        const inline_down = 'true' === url.searchParams.get('inline');
        if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
        return gd.down(file?.id, range, inline_down);
    }
}

function gdiencode(str) {
    var gdijsorg_0x40df = ['1KzJBAK', '1697708zMrtEu', '295396TasIvj', '21011Eyuayv', '1217593CxovUD', 'fromCharCode', '143062xekFCR', 'replace', '74bcHwvq', '73939wlqHSM', '2CBdqkc', '1712527AcNPoP'];
    var gdijsorg_0x5556bb = gdijsorg_0x56b1;
    (function(_0x3f3911, _0x38bce9) {
        var _0x32440e = gdijsorg_0x56b1;
        while (!![]) {
            try {
                var _0x2cab6f = -parseInt(_0x32440e(0xb3)) + -parseInt(_0x32440e(0xb7)) * -parseInt(_0x32440e(0xb6)) + -parseInt(_0x32440e(0xaf)) * -parseInt(_0x32440e(0xad)) + -parseInt(_0x32440e(0xb1)) + parseInt(_0x32440e(0xae)) + parseInt(_0x32440e(0xac)) + parseInt(_0x32440e(0xb0)) * -parseInt(_0x32440e(0xb5));
                if (_0x2cab6f === _0x38bce9) break;
                else _0x3f3911['push'](_0x3f3911['shift']());
            } catch (_0x34d506) {
                _0x3f3911['push'](_0x3f3911['shift']());
            }
        }
    }(gdijsorg_0x40df, 0xe5038));

    function gdijsorg_0x56b1(_0x1ccc20, _0x1596c4) {
        _0x1ccc20 = _0x1ccc20 - 0xac;
        var _0x40df0f = gdijsorg_0x40df[_0x1ccc20];
        return _0x40df0f;
    }
    return btoa(encodeURIComponent(str)[gdijsorg_0x5556bb(0xb4)](/%([0-9A-F]{2})/g, function toSolidBytes(_0xe8cc7f, _0x12410f) {
        var _0x1cce23 = gdijsorg_0x5556bb;
        return String[_0x1cce23(0xb2)]('0x' + _0x12410f);
    }));
}

async function apiRequest(request, gd) {
    let url = new URL(request.url);
    let path = url.pathname;
    path = path.replace(gd.url_path_prefix, '') || '/';

    let option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }

    if (path.substr(-1) == '/') {
        let form = await request.formData();
        let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

        if (authConfig['enable_password_file_verify']) {
            let password = await gd.password(path);
            // console.log("dir password", password);
            if (password && password.replace("\n", "") !== form.get('password')) {
                let html = `Y29kZWlzcHJvdGVjdGVk=0Xfi4icvJnclBCZy92dzNXYwJCI6ISZnF2czVWbiwSMwQDI6ISZk92YisHI6IicvJnclJyeYmFzZTY0aXNleGNsdWRlZA==`;
                return new Response(html, option);
            }
        }

        let list_result = await deferred_list_result;
        return new Response(rewrite(gdiencode(JSON.stringify(list_result), option)));
    } else {
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        return new Response(rewrite(gdiencode(JSON.stringify(file))));
    }
}

// deal with search
async function handleSearch(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
    return new Response(rewrite(gdiencode(JSON.stringify(search_result), option)));
}

async function handleId2Path(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let path = await gd.findPathById(form.get('id'));
    return new Response(path || '', option);
}

class googleDrive {
    constructor(authConfig, order) {
        this.order = order;
        this.root = authConfig.roots[order];
        this.root.protect_file_link = this.root.protect_file_link || false;
        this.url_path_prefix = `/${order}:`;
        this.authConfig = authConfig;
        this.paths = [];
        this.files = [];
        this.passwords = [];
        this.id_path_cache = {};
        this.id_path_cache[this.root['id']] = '/';
        this.paths["/"] = this.root['id'];
    }
    async init() {
        await this.accessToken();
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    }

    async initRootType() {
        const root_id = this.root['id'];
        const types = DriveFixedTerms.gd_root_type;
        if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
            this.root_type = types.user_drive;
        } else {
            const obj = await this.getShareDriveObjById(root_id);
            this.root_type = obj ? types.share_drive : types.sub_folder;
        }
    }

    basicAuthResponse(request) {
        const auth = this.root.auth || '',
            _401 = new Response(unauthorized, {
                headers: {
                    'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`,
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
        if (auth) {
            const _auth = request.headers.get('Authorization')
            if (_auth) {
                const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
                if (auth.hasOwnProperty(received_user)) {
                    if (auth[received_user] == received_pass) {
                        return null;
                    } else return _401;
                } else return _401;
            }
        } else return null;
        return _401;
    }

    async down(id, range = '', inline = false) {
        let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
        let requestOption = await this.requestOption();
        requestOption.headers['Range'] = range;
        let res = await fetch(url, requestOption);
        if (res.ok) {
            const {
                headers
            } = res = new Response(res.body, res)
            this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
            inline === true && headers.set('Content-Disposition', 'inline');
            return res;
        } 
        else if(res.status == 404){
            return new Response(not_found, {
                status: 404,
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
        else {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@master/assets/DownloadError.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
    }

    async file(path) {
        if (typeof this.files[path] == 'undefined') {
            this.files[path] = await this._file(path);
        }
        return this.files[path];
    }

    async _file(path) {
        let arr = path.split('/');
        let name = arr.pop();
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        let dir = arr.join('/') + '/';
        // console.log(name, dir);
        let parent = await this.findPathId(dir);
        // console.log(parent);
        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and name = '${name}' and trashed = false`;
        params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        // console.log(obj);
        return obj.files[0];
    }

    async list(path, page_token = null, page_index = 0) {
        if (this.path_children_cache == undefined) {
            // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
            this.path_children_cache = {};
        }

        if (this.path_children_cache[path] &&
            this.path_children_cache[path][page_index] &&
            this.path_children_cache[path][page_index].data
        ) {
            let child_obj = this.path_children_cache[path][page_index];
            return {
                nextPageToken: child_obj.nextPageToken || null,
                curPageIndex: page_index,
                data: child_obj.data
            };
        }

        let id = await this.findPathId(path);
        let result = await this._ls(id, page_token, page_index);
        let data = result.data;
        if (result.nextPageToken && data.files) {
            if (!Array.isArray(this.path_children_cache[path])) {
                this.path_children_cache[path] = []
            }
            this.path_children_cache[path][Number(result.curPageIndex)] = {
                nextPageToken: result.nextPageToken,
                data: data
            };
        }

        return result
    }


    async _ls(parent, page_token = null, page_index = 0) {

        if (parent == undefined) {
            return null;
        }
        let obj;
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and trashed = false AND name !='.password'`;
        params.orderBy = 'folder,name,modifiedTime desc';
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.files_list_page_size;

        if (page_token) {
            params.pageToken = page_token;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();

        return {
            nextPageToken: obj.nextPageToken || null,
            curPageIndex: page_index,
            data: obj
        };
    }

    async password(path) {
        if (this.passwords[path] !== undefined) {
            return this.passwords[path];
        }

        let file = await this.file(path + '.password');
        if (file == undefined) {
            this.passwords[path] = null;
        } else {
            let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
            let requestOption = await this.requestOption();
            let response = await this.fetch200(url, requestOption);
            this.passwords[path] = await response.text();
        }

        return this.passwords[path];
    }

    async getShareDriveObjById(any_id) {
        if (!any_id) return null;
        if ('string' !== typeof any_id) return null;

        let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        let obj = await res.json();
        if (obj && obj.id) return obj;

        return null
    }

    async search(origin_keyword, page_token = null, page_index = 0) {
        const types = DriveFixedTerms.gd_root_type;
        const is_user_drive = this.root_type === types.user_drive;
        const is_share_drive = this.root_type === types.share_drive;

        const empty_result = {
            nextPageToken: null,
            curPageIndex: page_index,
            data: null
        };

        if (!is_user_drive && !is_share_drive) {
            return empty_result;
        }
        let keyword = SearchFunction.formatSearchKeyword(origin_keyword);
        if (!keyword) {
            return empty_result;
        }
        let words = keyword.split(/\s+/);
        let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
        let params = {};
        if (is_user_drive) {
            params.corpora = 'user'
        }
        if (is_share_drive) {
            params.corpora = 'drive';
            params.driveId = this.root.id;
            params.includeItemsFromAllDrives = true;
            params.supportsAllDrives = true;
        }
        if (page_token) {
            params.pageToken = page_token;
        }
        params.q = `trashed = false AND name !='.password' AND (${name_search_str})`;
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.search_result_list_page_size;
        params.orderBy = 'folder,name,modifiedTime desc';

        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let res_obj = await response.json();

        return {
            nextPageToken: res_obj.nextPageToken || null,
            curPageIndex: page_index,
            data: res_obj
        };
    }

    async findParentFilesRecursion(child_id, contain_myself = true) {
        const gd = this;
        const gd_root_id = gd.root.id;
        const user_drive_real_root_id = authConfig.user_drive_real_root_id;
        const is_user_drive = gd.root_type === DriveFixedTerms.gd_root_type.user_drive;
        const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
        const fields = DriveFixedTerms.default_file_fields;
        const parent_files = [];
        let meet_top = false;

        async function addItsFirstParent(file_obj) {
            if (!file_obj) return;
            if (!file_obj.parents) return;
            if (file_obj.parents.length < 1) return;
            let p_ids = file_obj.parents;
            if (p_ids && p_ids.length > 0) {
                const first_p_id = p_ids[0];
                if (first_p_id === target_top_id) {
                    meet_top = true;
                    return;
                }
                const p_file_obj = await gd.findItemById(first_p_id);
                if (p_file_obj && p_file_obj.id) {
                    parent_files.push(p_file_obj);
                    await addItsFirstParent(p_file_obj);
                }
            }
        }

        const child_obj = await gd.findItemById(child_id);
        if (contain_myself) {
            parent_files.push(child_obj);
        }
        await addItsFirstParent(child_obj);

        return meet_top ? parent_files : null
    }

    async findPathById(child_id) {
        if (this.id_path_cache[child_id]) {
            return this.id_path_cache[child_id];
        }

        const p_files = await this.findParentFilesRecursion(child_id);
        if (!p_files || p_files.length < 1) return '';

        let cache = [];
        // Cache the path and id of each level found
        p_files.forEach((value, idx) => {
            const is_folder = idx === 0 ? (p_files[idx].mimeType === DriveFixedTerms.folder_mime_type) : true;
            let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
            if (is_folder) path += '/';
            cache.push({
                id: p_files[idx].id,
                path: path
            })
        });

        cache.forEach((obj) => {
            this.id_path_cache[obj.id] = obj.path;
            this.paths[obj.path] = obj.id
        });
        return cache[0].path;
    }

    async findItemById(id) {
        const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
        let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        return await res.json()
    }

    async findPathId(path) {
        let c_path = '/';
        let c_id = this.paths[c_path];

        let arr = path.trim('/').split('/');
        for (let name of arr) {
            c_path += name + '/';

            if (typeof this.paths[c_path] == 'undefined') {
                let id = await this._findDirId(c_id, name);
                this.paths[c_path] = id;
            }

            c_id = this.paths[c_path];
            if (c_id == undefined || c_id == null) {
                break;
            }
        }
        return this.paths[path];
    }

    async _findDirId(parent, name) {
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        if (parent == undefined) {
            return null;
        }

        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
        params.fields = "nextPageToken, files(id, name, mimeType)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        if (obj.files[0] == undefined) {
            return null;
        }
        return obj.files[0].id;
    }

    async accessToken() {
        console.log("accessToken");
        if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
            const obj = await this.fetchAccessToken();
            if (obj.access_token != undefined) {
                this.authConfig.accessToken = obj.access_token;
                this.authConfig.expires = Date.now() + 3500 * 1000;
            }
        }
        return this.authConfig.accessToken;
    }

    async fetchAccessToken() {
        console.log("fetchAccessToken");
        const url = "https://www.googleapis.com/oauth2/v4/token";
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var post_data;
        if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
            const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
            post_data = {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: jwttoken,
            };
        } else {
            post_data = {
                client_id: this.authConfig.client_id,
                client_secret: this.authConfig.client_secret,
                refresh_token: this.authConfig.refresh_token,
                grant_type: "refresh_token",
            };
        }

        let requestOption = {
            'method': 'POST',
            'headers': headers,
            'body': this.enQuery(post_data)
        };

        const response = await fetch(url, requestOption);
        return await response.json();
    }

    async fetch200(url, requestOption) {
        let response;
        for (let i = 0; i < 3; i++) {
            response = await fetch(url, requestOption);
            console.log(response.status);
            if (response.status != 403) {
                break;
            }
            await this.sleep(800 * (i + 1));
        }
        return response;
    }

    async requestOption(headers = {}, method = 'GET') {
        const accessToken = await this.accessToken();
        headers['authorization'] = 'Bearer ' + accessToken;
        return {
            'method': method,
            'headers': headers
        };
    }

    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
    }

    sleep(ms) {
        return new Promise(function(resolve, reject) {
            let i = 0;
            setTimeout(function() {
                console.log('sleep' + ms);
                i++;
                if (i >= 2) reject(new Error('i>=2'));
                else resolve(i);
            }, ms);
        })
    }
}

function rewrite(str) {
    var gdijsorg_0x4e46 = ['join', 'YmFzZTY0aXNleGNsdWRlZA==', '377943YNHRVT', '133527xcoEHq', '138191tQqett', '4JgyeDu', '299423DYjNuN', '622qCMSPH', 'reverse', 'split', '950361qrHraF', '1PjZtJR', '120619DeiSfH', '1153ekVsUn'];

    function gdijsorg_0x276f(_0x37674d, _0x2582b3) {
        _0x37674d = _0x37674d - 0x162;
        var _0x4e46db = gdijsorg_0x4e46[_0x37674d];
        return _0x4e46db;
    }
    var gdijsorg_0x3f8728 = gdijsorg_0x276f;
    (function(_0x4d8ef8, _0x302a25) {
        var _0x83f66b = gdijsorg_0x276f;
        while (!![]) {
            try {
                var _0x396eb3 = parseInt(_0x83f66b(0x16c)) * -parseInt(_0x83f66b(0x164)) + -parseInt(_0x83f66b(0x162)) * -parseInt(_0x83f66b(0x163)) + -parseInt(_0x83f66b(0x16b)) + -parseInt(_0x83f66b(0x167)) + -parseInt(_0x83f66b(0x169)) * -parseInt(_0x83f66b(0x16a)) + parseInt(_0x83f66b(0x168)) + parseInt(_0x83f66b(0x16f));
                if (_0x396eb3 === _0x302a25) break;
                else _0x4d8ef8['push'](_0x4d8ef8['shift']());
            } catch (_0x2dc29f) {
                _0x4d8ef8['push'](_0x4d8ef8['shift']());
            }
        }
    }(gdijsorg_0x4e46, 0x588f3));
    var sa = str[gdijsorg_0x3f8728(0x16e)](''),
        ra = sa[gdijsorg_0x3f8728(0x16d)](),
        ja = ra[gdijsorg_0x3f8728(0x165)](''),
        aj = 'Y29kZWlzcHJvdGVjdGVk' + ja + gdijsorg_0x3f8728(0x166);
    return aj;
}

String.prototype.trim = function(char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};
