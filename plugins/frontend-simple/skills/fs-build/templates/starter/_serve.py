#!/usr/bin/env python3
"""Servidor local do starter frontend-simple, SEM cache (Cache-Control: no-store).

Uso:  python3 _serve.py    ->  abre em 127.0.0.1 na porta 8791

Por que sem cache: durante a construcao da LP o navegador adora servir a
versao ANTIGA de css/js em cache, e ai a pagina parece "quebrada" ou
"sem a mudanca" mesmo com o arquivo certo no disco. Com no-store, o que
esta no disco e exatamente o que aparece na tela, sempre.
"""
import functools
import os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

DIR = os.path.dirname(os.path.abspath(__file__))
PORTA = 8791


class NoCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def log_message(self, *args):  # silencioso
        pass


if __name__ == '__main__':
    handler = functools.partial(NoCache, directory=DIR)
    print('Starter frontend-simple (no-cache) -> 127.0.0.1:%d' % PORTA)
    ThreadingHTTPServer(('127.0.0.1', PORTA), handler).serve_forever()
