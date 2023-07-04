m = function(e) {

            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = t.enc
              , a = void 0 === r ? "Utf8" : r
              , o = t.mode
              , c = void 0 === o ? "ECB" : o
              , i = t.padding
              , u = void 0 === i ? "Pkcs7" : i
              , d = p.a.enc[a].parse("15534217839@126.com0000")
              , s = {
                mode: p.a.mode[c],
                padding: p.a.pad[u]
            }
              , l = p.a.TripleDES.encrypt(e, d, s);
            return l.toString()
        }

        m(123456789)