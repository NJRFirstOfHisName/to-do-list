(() => {
  "use strict";
  var e = {
      760: (e, t, n) => {
        function o(e) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            o(e)
          );
        }
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(
                e,
                (void 0,
                (i = (function (e, t) {
                  if ("object" !== o(e) || null === e) return e;
                  var n = e[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var r = n.call(e, "string");
                    if ("object" !== o(r)) return r;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(r.key)),
                "symbol" === o(i) ? i : String(i)),
                r
              );
          }
          var i;
        }
        n.d(t, { Z: () => i });
        var i = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : " ",
              o = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = arguments.length > 4 ? arguments[4] : void 0;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.title = t),
              (this.description = n),
              (this.dueDate = o),
              (this.priority = r),
              (this.project = i),
              (this.completed = !1),
              (this.taskID = "id" + Math.random().toString(16).slice(2));
          }
          var t, n;
          return (
            (t = e),
            (n = [
              {
                key: "getTitle",
                get: function () {
                  return this._title;
                },
              },
              {
                key: "getDescription",
                get: function () {
                  return this._description;
                },
              },
              {
                key: "getDueDate",
                get: function () {
                  return this._dueDate;
                },
              },
              {
                key: "getPriority",
                get: function () {
                  return this._priority;
                },
              },
              {
                key: "getCompleted",
                get: function () {
                  return this._completed;
                },
              },
              {
                key: "getProject",
                get: function () {
                  return this._project;
                },
              },
              {
                key: "getTaskID",
                get: function () {
                  return this.taskID;
                },
              },
              {
                key: "title",
                set: function (e) {
                  this._title = e;
                },
              },
              {
                key: "description",
                set: function (e) {
                  this._description = e;
                },
              },
              {
                key: "dueDate",
                set: function (e) {
                  this._dueDate = e;
                },
              },
              {
                key: "priority",
                set: function (e) {
                  this._priority = e;
                },
              },
              {
                key: "completed",
                set: function (e) {
                  this._completed = e;
                },
              },
              {
                key: "project",
                set: function (e) {
                  this._project = e;
                },
              },
            ]) && r(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })();
      },
      309: (e, t, n) => {
        function o(e, t) {
          var n = document.getElementById("projects"),
            o = document.getElementById("projectError");
          if (e) {
            var r = document.createElement("option");
            (r.value = t.value + "Project"),
              (r.text = t.value),
              n.add(r),
              (n.value = r.value),
              (o.innerHTML = ""),
              (t.value = ""),
              document
                .getElementById("projectAdd")
                .classList.toggle("expanded");
          } else o.innerHTML = "Project name in use.";
        }
        n.d(t, { Z: () => o });
      },
      472: (e, t, n) => {
        function o(e, t) {
          for (var n = !0, o = 0; o < t.options.length; o++) {
            var r = t.options[o].value.toLowerCase();
            e.value.toLowerCase() === r.slice(0, -7) && n && (n = !1);
          }
          return n;
        }
        n.d(t, { Z: () => o });
      },
      358: (e, t, n) => {
        n.d(t, { Z: () => r });
        const o =
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaIiAvPjwvc3ZnPg==";
        function r(e) {
          var t = document.createElement("div");
          (t.className = "entry"), (t.id = e._TaskID);
          var n = document.createElement("input");
          (n.type = "checkbox"),
            (n.className = "check"),
            (n.checked = e._completed),
            t.appendChild(n);
          var r = document.createElement("label");
          (r.innerHTML = e._title),
            (r.className = "title"),
            e._priority && (r.className += " priority"),
            t.appendChild(r);
          var i = document.createElement("p");
          (i.className = "description"),
            (i.innerHTML = e._description),
            t.appendChild(i);
          var a = document.createElement("p");
          (a.innerHTML = e._dueDate),
            (a.className = "dueDate"),
            t.appendChild(a);
          var l = document.createElement("img");
          (l.src = o),
            (l.className = "delete"),
            t.appendChild(l),
            e._completed
              ? (r.style.setProperty("text-decoration", "line-through"),
                completedList.appendChild(t))
              : (r.style.setProperty("text-decoration", ""),
                tdList.appendChild(t));
        }
      },
      179: (e, t, n) => {
        n.d(t, { Z: () => l });
        var o = n(358);
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
          return o;
        }
        var i = document.getElementById("tdList"),
          a = document.getElementById("completedList");
        function l(e, t) {
          (i.innerHTML = ""),
            (a.innerHTML = ""),
            Object.entries(window.localStorage).forEach(function (e) {
              var n,
                i,
                a =
                  ((i = 2),
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })((n = e)) ||
                    (function (e, t) {
                      var n =
                        null == e
                          ? null
                          : ("undefined" != typeof Symbol &&
                              e[Symbol.iterator]) ||
                            e["@@iterator"];
                      if (null != n) {
                        var o,
                          r,
                          i,
                          a,
                          l = [],
                          c = !0,
                          s = !1;
                        try {
                          if (((i = (n = n.call(e)).next), 0 === t)) {
                            if (Object(n) !== n) return;
                            c = !1;
                          } else
                            for (
                              ;
                              !(c = (o = i.call(n)).done) &&
                              (l.push(o.value), l.length !== t);
                              c = !0
                            );
                        } catch (e) {
                          (s = !0), (r = e);
                        } finally {
                          try {
                            if (
                              !c &&
                              null != n.return &&
                              ((a = n.return()), Object(a) !== a)
                            )
                              return;
                          } finally {
                            if (s) throw r;
                          }
                        }
                        return l;
                      }
                    })(n, i) ||
                    (function (e, t) {
                      if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return (
                          "Object" === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(e)
                            : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? r(e, t)
                            : void 0
                        );
                      }
                    })(n, i) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()),
                l = (a[0], a[1]);
              JSON.parse(l)._project === t && (0, o.Z)(JSON.parse(l));
            });
        }
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.d = (e, t) => {
    for (var o in t)
      n.o(t, o) &&
        !n.o(e, o) &&
        Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = n(760),
        t = n(358),
        o = n(309),
        r = n(472),
        i = n(179),
        a = document.getElementById("projects"),
        l = new e.Z(
          "Default Item",
          "This is a default item for defaulting",
          "07-02-2023",
          !1,
          "defaultProject"
        ),
        c = new e.Z(
          "Also default Item",
          "This is a default item for defaulting, but with a slightly longer string to test wrapping",
          "07-02-2023",
          !1,
          "defaultProject"
        ),
        s = new e.Z(
          "Lots of default Item(s)",
          "This is a default item for defaulting, but with an exceptionally long string so that I can test text wrapping and potentially concatenating, which I'm not entirely sure how to implement yet but which I will also have to figure out at some point.",
          "07-02-2023",
          !1,
          "defaultProject"
        ),
        d = new e.Z(
          "Getting sick of these default Items",
          "As it turns out that string wasn't quite as exceptionally long as I had hoped, but I think I'm just going to limit the number of characters in the description and call it a day.",
          "07-02-2023",
          !1,
          "defaultProject"
        ),
        u = new e.Z(
          "Default completed Item",
          "This is a completed default item for completed defaulting",
          "01-012-2001",
          !0,
          "defaultProject"
        ),
        m = new e.Z(
          "Test Item",
          "This is a test item for testing",
          "09-11-2050",
          !1,
          "testProject"
        ),
        p = new e.Z(
          "Test completed Item",
          "This is a completed test item for completed testing",
          "11-11-1111",
          !0,
          "testProject"
        );
      (u.completed = !0), (p.completed = !0);
      var g = [l, m, u, p, c, s, d];
      console.log(g),
        localStorage.clear(),
        g.forEach(function (e) {
          localStorage.setItem(e.getTaskID, JSON.stringify(e));
        }),
        (0, i.Z)(g, a.value),
        a.addEventListener("change", function () {
          (0, i.Z)(g, a.value);
        }),
        document
          .getElementById("projectFormButton")
          .addEventListener("click", function () {
            var e = document.getElementById("projectAdd");
            e.classList.toggle("expanded"), e.classList.toggle("collapsed");
          }),
        document
          .getElementById("newProject")
          .addEventListener("click", function () {
            var e = document.getElementById("projectInput"),
              t = (0, r.Z)(e, a);
            (0, o.Z)(t, e), (0, i.Z)(g, a.value);
          }),
        document
          .getElementById("addBtn")
          .addEventListener("click", function () {
            if (document.getElementById("titleInput").value) {
              var n = new e.Z(
                document.getElementById("titleInput").value,
                document.getElementById("descriptionForm").value,
                document.getElementById("dueDate").value,
                document.getElementById("priority").checked,
                a.value
              );
              (0, t.Z)(n),
                g.push(n),
                localStorage.setItem(n.getTaskID, JSON.stringify(n)),
                console.log(JSON.parse(localStorage.getItem(n.getTaskID))),
                console.log(localStorage.length),
                console.log(n.getTaskID);
            }
          }),
        document
          .getElementById("container")
          .addEventListener("click", function (e) {
            var n = e.target.parentNode;
            if (
              (e.target.classList.contains("delete") &&
                ((g = g.filter(function (e) {
                  return e.getTaskID != n.id;
                })),
                n.remove()),
              e.target.classList.contains("check"))
            ) {
              var o = g
                .map(function (e) {
                  return e.getTaskID;
                })
                .indexOf(n.id);
              (g[o].completed = !g[o].getCompleted), (0, t.Z)(g[o]), n.remove();
            }
            if ("expandCompleted" === e.target.id) {
              e.target.nextElementSibling.firstElementChild.classList.contains(
                "collapsed"
              )
                ? (e.target.innerHTML = "Completed ▿")
                : (e.target.innerHTML = "Completed ▸");
              var r = document.getElementById("completedList");
              r.classList.toggle("expanded"), r.classList.toggle("collapsed");
            }
          }),
        document
          .getElementById("inputFormButton")
          .addEventListener("click", function () {
            var e = document.getElementById("inputForm");
            e.classList.toggle("expanded"), e.classList.toggle("collapsed");
          });
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixTQUFTLFdBQ25FLElBQU1vQixFQUFZaEcsU0FBU0MsZUFBZSxhQUMxQytGLEVBQVV2RixVQUFVQyxPQUFPLFlBQzNCc0YsRUFBVXZGLFVBQVVDLE9BQU8sWUFDN0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hZGRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY2hlY2tQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRQcm9qZWN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiIFwiLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFza0lEID0gXCJpZFwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMik7XG4gIH1cblxuICBnZXQgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuICBnZXQgZ2V0Q29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gIH1cbiAgZ2V0IGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gIH1cbiAgZ2V0IGdldFRhc2tJRCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrSUQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbiAgc2V0IGNvbXBsZXRlZChjb21wbGV0ZWQpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbiAgc2V0IHByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgLy8gdGltZUxlZnQoKSB7XG4gIC8vICAgICBpZihkdWVEYXRlKSB7XG4gIC8vICAgICAgICAgbm93ID0gbmV3IERhdGUoKTtcbiAgLy8gICAgICAgICByZXR1cm4gKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmR1ZURhdGUuZ2V0VGltZSgpKS8zNjAwMDtcbiAgLy8gICAgIH1cbiAgLy8gfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCh2YWxpZCwgcHJvamVjdElucHV0KSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gIGxldCBwcm9qZWN0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RFcnJvclwiKTtcbiAgaWYgKHZhbGlkKSB7XG4gICAgLy9DcmVhdGVzIG5ldyBwcm9qZWN0IHdpdGggc3VwcGxpZWQgbmFtZSBhbmQgYWRkcyBpdCB0byB0aGUgc2VsZWN0IGJveFxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0LnZhbHVlID0gcHJvamVjdElucHV0LnZhbHVlICsgXCJQcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdC50ZXh0ID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgIHByb2plY3QuYWRkKG5ld1Byb2plY3QpO1xuXG4gICAgLy9NYWtlcyBuZXdQcm9qZWN0IHRoZSBhY3RpdmUgcHJvamVjdFxuICAgIHByb2plY3QudmFsdWUgPSBuZXdQcm9qZWN0LnZhbHVlO1xuICAgIHByb2plY3RFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJQcm9qZWN0IG5hbWUgaW4gdXNlLlwiO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1Byb2plY3RzKHByb2plY3RJbnB1dCwgcHJvamVjdCkge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gIC8vQ2hlY2tzIHRoZSBwcm9qZWN0cyBpbiB0aGUgPHNlbGVjdD4gYm94IHRvIHNlZSBpZiBvbmUgZXhpc3RzIHdpdGggdGhlIHNhbWUgbmFtZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0Lm9wdGlvbnNbaV0udmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhpc3RpbmdQcm9qZWN0LnNsaWNlKDAsIC03KSAmJlxuICAgICAgdmFsaWRcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy9SZXR1cm5zIHRydWUgaWYgdGhlIHByb2plY3QgaGFzIHVuaXF1ZSBuYW1lLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZVxuICByZXR1cm4gdmFsaWQ7XG59XG4iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRMaXN0SXRlbShMaXN0SXRlbSkge1xuICAvL0VuY2xvc2VzIGFsbCB0YXNrcyBpbiBhIGRpdiB3aXRoIGEgdW5pcXVlIGlkIGFuZCBzaGFyZWQgY2xhc3NcbiAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdFbnRyeS5jbGFzc05hbWUgPSBcImVudHJ5XCI7XG4gIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uX1Rhc2tJRDtcblxuICAvL0NyZWF0ZSBjaGVja2JveCBmb3IgbWFya2luZyB0YXNrcyBhcyBjb21wbGV0ZSAob3IgdW4tbWFya2luZylcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IExpc3RJdGVtLl9jb21wbGV0ZWQ7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAvL0NyZWF0ZSBsYWJlbCB3aXRoIHRoZSB0YXNrJ3MgdGl0bGUgYW5kIGhpZ2hsaWdodHMgaXQgaWYgaXQncyBhIHByaW9yaXR5XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdMYWJlbC5pbm5lckhUTUwgPSBMaXN0SXRlbS5fdGl0bGU7XG4gIG5ld0xhYmVsLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgaWYgKExpc3RJdGVtLl9wcmlvcml0eSkge1xuICAgIG5ld0xhYmVsLmNsYXNzTmFtZSArPSBcIiBwcmlvcml0eVwiO1xuICB9XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKG5ld0xhYmVsKTtcblxuICAvL0FkZCBkZXNjcmlwdGlvbi4gSWYgbm8gZGVzY3JpcHRpb24gaXMgc3VwcGxpZWQgZmllbGQgd2lsbCBiZSBibGFua1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IExpc3RJdGVtLl9kZXNjcmlwdGlvbjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcblxuICAvL0FkZCBkdWUgZGF0ZS4gSWYgbm8gZGF0ZSBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBMaXN0SXRlbS5fZHVlRGF0ZTtcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSBcImR1ZURhdGVcIjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgLy9BZGQgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrXG4gIC8vIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcbiAgLy8gZGVsZXRlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIC8vQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxuICBpZiAoIUxpc3RJdGVtLl9jb21wbGV0ZWQpIHtcbiAgICBuZXdMYWJlbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcIlwiKTtcbiAgICB0ZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9IGVsc2Uge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9XG59XG4iLCJpbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5cbmNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcblxuLy9DaGVja3MgbGlzdCBvZiB0by1kbydzIGFuZCBwcmludHMgZWFjaCBvbmUgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50IHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50UHJvamVjdChmdWxsTGlzdCwgdmFsdWUpIHtcbiAgdGRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbXBsZXRlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gZnVsbExpc3QuZm9yRWFjaChMaXN0SXRlbSA9PiB7XG4gIC8vICAgICBpZihMaXN0SXRlbS5nZXRQcm9qZWN0ID09PSB2YWx1ZSl7XG4gIC8vICAgICAgICAgcHJpbnRMaXN0SXRlbShMaXN0SXRlbSk7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0SXRlbVwiKVxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKExpc3RJdGVtKTtcbiAgLy8gICAgIH1cbiAgLy8gfSlcbiAgT2JqZWN0LmVudHJpZXMod2luZG93LmxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgIGlmIChKU09OLnBhcnNlKHZhbCkuX3Byb2plY3QgPT09IHZhbHVlKSB7XG4gICAgICBwcmludExpc3RJdGVtKEpTT04ucGFyc2UodmFsKSk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9hZGRMaXN0SXRlbVwiO1xuaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vYWRkUHJvamVjdFwiO1xuaW1wb3J0IGNoZWNrUHJvamVjdHMgZnJvbSBcIi4vY2hlY2tQcm9qZWN0c1wiO1xuaW1wb3J0IHByaW50UHJvamVjdCBmcm9tIFwiLi9wcmludFByb2plY3RcIjtcblxuLy8gRG9tIGVsZW1lbnRzIHVzZWQgZm9yIGFuZCBpbiBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4vL0hhcmQtY29kZWQgZW50cmllcyB0byBzaW1wbGlmeSB0ZXN0aW5nLCB3aWxsIGJlIGRlbGV0ZWQgb25jZSBwcm9qZWN0IGlzIGZpbmlzaGVkXG5jb25zdCBkZWZhdWx0TGlzdCA9IG5ldyBMaXN0SXRlbShcbiAgXCJEZWZhdWx0IEl0ZW1cIixcbiAgXCJUaGlzIGlzIGEgZGVmYXVsdCBpdGVtIGZvciBkZWZhdWx0aW5nXCIsXG4gIFwiMDctMDItMjAyM1wiLFxuICBmYWxzZSxcbiAgXCJkZWZhdWx0UHJvamVjdFwiLFxuKTtcbmNvbnN0IGRlZmF1bHRMaXN0MiA9IG5ldyBMaXN0SXRlbShcbiAgXCJBbHNvIGRlZmF1bHQgSXRlbVwiLFxuICBcIlRoaXMgaXMgYSBkZWZhdWx0IGl0ZW0gZm9yIGRlZmF1bHRpbmcsIGJ1dCB3aXRoIGEgc2xpZ2h0bHkgbG9uZ2VyIHN0cmluZyB0byB0ZXN0IHdyYXBwaW5nXCIsXG4gIFwiMDctMDItMjAyM1wiLFxuICBmYWxzZSxcbiAgXCJkZWZhdWx0UHJvamVjdFwiLFxuKTtcbmNvbnN0IGRlZmF1bHRMaXN0MyA9IG5ldyBMaXN0SXRlbShcbiAgXCJMb3RzIG9mIGRlZmF1bHQgSXRlbShzKVwiLFxuICBcIlRoaXMgaXMgYSBkZWZhdWx0IGl0ZW0gZm9yIGRlZmF1bHRpbmcsIGJ1dCB3aXRoIGFuIGV4Y2VwdGlvbmFsbHkgbG9uZyBzdHJpbmcgc28gdGhhdCBJIGNhbiB0ZXN0IHRleHQgd3JhcHBpbmcgYW5kIHBvdGVudGlhbGx5IGNvbmNhdGVuYXRpbmcsIHdoaWNoIEknbSBub3QgZW50aXJlbHkgc3VyZSBob3cgdG8gaW1wbGVtZW50IHlldCBidXQgd2hpY2ggSSB3aWxsIGFsc28gaGF2ZSB0byBmaWd1cmUgb3V0IGF0IHNvbWUgcG9pbnQuXCIsXG4gIFwiMDctMDItMjAyM1wiLFxuICBmYWxzZSxcbiAgXCJkZWZhdWx0UHJvamVjdFwiLFxuKTtcbmNvbnN0IGRlZmF1bHRMaXN0NCA9IG5ldyBMaXN0SXRlbShcbiAgXCJHZXR0aW5nIHNpY2sgb2YgdGhlc2UgZGVmYXVsdCBJdGVtc1wiLFxuICBcIkFzIGl0IHR1cm5zIG91dCB0aGF0IHN0cmluZyB3YXNuJ3QgcXVpdGUgYXMgZXhjZXB0aW9uYWxseSBsb25nIGFzIEkgaGFkIGhvcGVkLCBidXQgSSB0aGluayBJJ20ganVzdCBnb2luZyB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gdGhlIGRlc2NyaXB0aW9uIGFuZCBjYWxsIGl0IGEgZGF5LlwiLFxuICBcIjA3LTAyLTIwMjNcIixcbiAgZmFsc2UsXG4gIFwiZGVmYXVsdFByb2plY3RcIixcbik7XG5jb25zdCBkZWZhdWx0Q29tcGxldGVkID0gbmV3IExpc3RJdGVtKFxuICBcIkRlZmF1bHQgY29tcGxldGVkIEl0ZW1cIixcbiAgXCJUaGlzIGlzIGEgY29tcGxldGVkIGRlZmF1bHQgaXRlbSBmb3IgY29tcGxldGVkIGRlZmF1bHRpbmdcIixcbiAgXCIwMS0wMTItMjAwMVwiLFxuICB0cnVlLFxuICBcImRlZmF1bHRQcm9qZWN0XCIsXG4pO1xuY29uc3QgdGVzdExpc3QgPSBuZXcgTGlzdEl0ZW0oXG4gIFwiVGVzdCBJdGVtXCIsXG4gIFwiVGhpcyBpcyBhIHRlc3QgaXRlbSBmb3IgdGVzdGluZ1wiLFxuICBcIjA5LTExLTIwNTBcIixcbiAgZmFsc2UsXG4gIFwidGVzdFByb2plY3RcIixcbik7XG5jb25zdCB0ZXN0Q29tcGxldGVkID0gbmV3IExpc3RJdGVtKFxuICBcIlRlc3QgY29tcGxldGVkIEl0ZW1cIixcbiAgXCJUaGlzIGlzIGEgY29tcGxldGVkIHRlc3QgaXRlbSBmb3IgY29tcGxldGVkIHRlc3RpbmdcIixcbiAgXCIxMS0xMS0xMTExXCIsXG4gIHRydWUsXG4gIFwidGVzdFByb2plY3RcIixcbik7XG5cbmRlZmF1bHRDb21wbGV0ZWQuY29tcGxldGVkID0gdHJ1ZTtcbnRlc3RDb21wbGV0ZWQuY29tcGxldGVkID0gdHJ1ZTtcblxubGV0IGZ1bGxMaXN0ID0gW1xuICBkZWZhdWx0TGlzdCxcbiAgdGVzdExpc3QsXG4gIGRlZmF1bHRDb21wbGV0ZWQsXG4gIHRlc3RDb21wbGV0ZWQsXG4gIGRlZmF1bHRMaXN0MixcbiAgZGVmYXVsdExpc3QzLFxuICBkZWZhdWx0TGlzdDQsXG5dO1xuY29uc29sZS5sb2coZnVsbExpc3QpO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmZ1bGxMaXN0LmZvckVhY2goKExpc3RJdGVtKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExpc3RJdGVtLmdldFRhc2tJRCwgSlNPTi5zdHJpbmdpZnkoTGlzdEl0ZW0pKTtcbn0pO1xuXG4vLyBPYmplY3QuZW50cmllcyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKCgpKVxuLy9QcmludHMgY29udGVudHMgb2YgZGVmYXVsdCBwcm9qZWN0IG9uIHBhZ2UgbG9hZFxucHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCBwcm9qZWN0LnZhbHVlKTtcblxuLy9QcmludHMgY29udGVudHMgb2Ygc2VsZWN0ZWQgcHJvamVjdCB3aGVuIHNlbGVjdGlvbiBpcyBjaGFuZ2VkXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBwcmludFByb2plY3QoZnVsbExpc3QsIHByb2plY3QudmFsdWUpO1xufSk7XG5cbi8vRXhwYW5kcyBvciBjb2xsYXBzZXMgdGhlIGZvcm0gZm9yIGFkZGluZyBhIHByb2plY3Qgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpO1xuICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgcHJvamVjdEFkZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xufSk7XG5cbi8vQ3JlYXRlcyBuZXcgcHJvamVjdCB3aGVuICdOZXcgUHJvamVjdCcgYnV0dG9uIGlzIHByZXNzZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIik7XG4gIGxldCB2YWxpZCA9IGNoZWNrUHJvamVjdHMocHJvamVjdElucHV0LCBwcm9qZWN0KTtcbiAgYWRkUHJvamVjdCh2YWxpZCwgcHJvamVjdElucHV0KTtcbiAgcHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCBwcm9qZWN0LnZhbHVlKTtcbn0pO1xuXG4vL0NyZWF0ZXMgYSBuZXcsIHVuY29tcGxldGVkIHRhc2sgd2hlbiAnQWRkJyBidXR0b24gaXMgcHJlc3NlZCBJRiB0aXRsZSBpcyBwcmVzZW50XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlKSB7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uRm9ybVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikuY2hlY2tlZCxcbiAgICAgIHByb2plY3QudmFsdWUsXG4gICAgKTtcbiAgICBwcmludExpc3RJdGVtKG5ld0xpc3RJdGVtKTtcbiAgICBmdWxsTGlzdC5wdXNoKG5ld0xpc3RJdGVtKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdMaXN0SXRlbS5nZXRUYXNrSUQsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3RJdGVtKSk7XG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuZXdMaXN0SXRlbS5nZXRUYXNrSUQpKSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2cobmV3TGlzdEl0ZW0uZ2V0VGFza0lEKTtcbiAgfVxufSk7XG5cbi8vTGlzdGVucyBmb3IgYW55IGNsaWNrcyB3aXRoaW4gdGhlIHRhc2tzIGNvbnRhaW5lci5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAvL0lmIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZCwgZGVsZXRlcyB0YXNrLlxuICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4gICAgZnVsbExpc3QgPSBmdWxsTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0VGFza0lEICE9IHBhcmVudC5pZCk7XG4gICAgcGFyZW50LnJlbW92ZSgpO1xuICB9XG4gIC8vSWYgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlcyAnY29tcGxldGVkJyBhbmQgbW92ZXMgdGFzayBmcm9tICd0YXNrcycgdG8gJ2NvbXBsZXRlZCcgb3IgdmljZS12ZXJzYVxuICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tcIikpIHtcbiAgICBsZXQgdG9nZ2xlSW5kZXggPSBmdWxsTGlzdC5tYXAoKGUpID0+IGUuZ2V0VGFza0lEKS5pbmRleE9mKHBhcmVudC5pZCk7XG4gICAgZnVsbExpc3RbdG9nZ2xlSW5kZXhdLmNvbXBsZXRlZCA9ICFmdWxsTGlzdFt0b2dnbGVJbmRleF0uZ2V0Q29tcGxldGVkO1xuICAgIHByaW50TGlzdEl0ZW0oZnVsbExpc3RbdG9nZ2xlSW5kZXhdKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG4gIH1cbiAgLy9JZiAnQ29tcGxldGVkJyBoZWFkZXIgaXMgY2xpY2tlZCwgZXhwYW5kcyB0aGUgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcbiAgaWYgKGVsZW1lbnQudGFyZ2V0LmlkID09PSBcImV4cGFuZENvbXBsZXRlZFwiKSB7XG4gICAgLy9SaWRpY3Vsb3VzIGNoYWluZWQgRE9NIGxpc3QgcG9pbnRzIHRvIHRoZSBjb21wbGV0ZWRMaXN0IGRpdiB0byBjaGVjayBpZiBpdCdzIGNvbGxhcHNlZFxuICAgIGlmIChcbiAgICAgIGVsZW1lbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgIFwiY29sbGFwc2VkXCIsXG4gICAgICApXG4gICAgKSB7XG4gICAgICBlbGVtZW50LnRhcmdldC5pbm5lckhUTUwgPSBcIkNvbXBsZXRlZCDilr9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50YXJnZXQuaW5uZXJIVE1MID0gXCJDb21wbGV0ZWQg4pa4XCI7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xuICB9XG59KTtcblxuLy9FeHBhbmRzIG9yIGNvbGxhcHNlcyBmb3JtIGZvciBhZGRpbmcgYSBuZXcgdGFzayB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybVwiKTtcbiAgaW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgaW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XG59KTtcbiJdLCJuYW1lcyI6WyJMaXN0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsImNvbXBsZXRlZCIsInRhc2tJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwia2V5IiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJhZGRQcm9qZWN0IiwidmFsaWQiLCJwcm9qZWN0SW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJvamVjdEVycm9yIiwibmV3UHJvamVjdCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJhZGQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaGVja1Byb2plY3RzIiwiaSIsIm9wdGlvbnMiLCJleGlzdGluZ1Byb2plY3QiLCJ0b0xvd2VyQ2FzZSIsInByaW50TGlzdEl0ZW0iLCJuZXdFbnRyeSIsImNsYXNzTmFtZSIsImlkIiwiX1Rhc2tJRCIsImNoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCJhcHBlbmRDaGlsZCIsIm5ld0xhYmVsIiwiZGVzY3JpcHRpb25UZXh0IiwiZGVsZXRlQnRuIiwic3JjIiwiZGVsZXRlSWNvbiIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjb21wbGV0ZWRMaXN0IiwidGRMaXN0IiwicHJpbnRQcm9qZWN0IiwiZnVsbExpc3QiLCJPYmplY3QiLCJlbnRyaWVzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsIl9yZWYiLCJfcmVmMiIsInZhbCIsIkpTT04iLCJwYXJzZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlZmF1bHRMaXN0IiwiZGVmYXVsdExpc3QyIiwiZGVmYXVsdExpc3QzIiwiZGVmYXVsdExpc3Q0IiwiZGVmYXVsdENvbXBsZXRlZCIsInRlc3RMaXN0IiwidGVzdENvbXBsZXRlZCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhciIsInNldEl0ZW0iLCJnZXRUYXNrSUQiLCJzdHJpbmdpZnkiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEFkZCIsIm5ld0xpc3RJdGVtIiwicHVzaCIsImdldEl0ZW0iLCJlbGVtZW50IiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIiwiZmlsdGVyIiwidGFzayIsInJlbW92ZSIsInRvZ2dsZUluZGV4IiwibWFwIiwiZSIsImluZGV4T2YiLCJnZXRDb21wbGV0ZWQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=
