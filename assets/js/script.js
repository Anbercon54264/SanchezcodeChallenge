let divNumeros = document.getElementById("divNumeros");
let divLetras = document.getElementById("divLetras");
let bnt1 = document.getElementById("bnt1");
let bnt2 = document.getElementById("bnt2");
let bnt3 = document.getElementById("bnt3");
let bnt4 = document.getElementById("bnt4");
let bnt5 = document.getElementById("bnt5");
let bnt6 = document.getElementById("bnt6");
let bnt7 = document.getElementById("bnt7");
let bnt8 = document.getElementById("bnt8");
let bnt9 = document.getElementById("bnt9");
let bnt10 = document.getElementById("bnt10");

let tmpLetras = "";
let tmpNumeros = "";

const ingresarA1 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (
      tmpNumeros === "1" ||
      tmpNumeros === "12" ||
      tmpNumeros === "123" ||
      tmpNumeros === "1234" ||
      tmpNumeros === "12345" ||
      tmpNumeros === "123456" ||
      tmpNumeros === "1234567" ||
      tmpNumeros === "12345678" ||
      tmpNumeros === "123456789" ||
      tmpNumeros === "1234567890"
    ) {
      alert("el 1 ya existe");
    } else {
      divNumeros.innerHTML = "1";
      tmpNumeros = "1";
    }
  } else {
    if (tmpLetras === "A" || tmpLetras !== "") {
      alert("la A ya existe");
    } else {
      divLetras.innerHTML = "A";
      tmpLetras = "A";
    }
  }
};

const ingresarB2 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 1");
    } else {
      if (
        tmpNumeros === "12" ||
        tmpNumeros === "123" ||
        tmpNumeros === "1234" ||
        tmpNumeros === "12345" ||
        tmpNumeros === "123456" ||
        tmpNumeros === "1234567" ||
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 2 ya esta");
      } else {
        divNumeros.innerHTML = tmpNumeros + "2";
        tmpNumeros = tmpNumeros + "2";
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("Falta la A");
    } else {
      if (
        tmpLetras === "AB" ||
        tmpLetras === "ABC" ||
        tmpLetras === "ABCD" ||
        tmpLetras === "ABCDE" ||
        tmpLetras === "ABCDEF" ||
        tmpLetras === "ABCDEFG" ||
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("la B ya existe");
      } else {
        divLetras.innerHTML = tmpLetras + "B";
        tmpLetras = tmpLetras + "B";
      }
    }
  }
};

const ingresarC3 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 12");
    } else {
      if (
        tmpNumeros === "123" ||
        tmpNumeros === "1234" ||
        tmpNumeros === "12345" ||
        tmpNumeros === "123456" ||
        tmpNumeros === "1234567" ||
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 3 ya esta");
      } else {
        if (tmpNumeros !== "123" && tmpNumeros === "1") {
          alert("falta el 2");
        } else {
          divNumeros.innerHTML = tmpNumeros + "3";
          tmpNumeros = tmpNumeros + "3";
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta AB");
    } else {
      if (
        tmpLetras === "ABC" ||
        tmpLetras === "ABCD" ||
        tmpLetras === "ABCDE" ||
        tmpLetras === "ABCDEF" ||
        tmpLetras === "ABCDEFG" ||
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("la C ya existe");
      } else {
        if (tmpLetras !== "AB" && tmpLetras === "A") {
          alert("falta B");
        } else {
          divLetras.innerHTML = tmpLetras + "C";
          tmpLetras = tmpLetras + "C";
        }
      }
    }
  }
};

const ingresarD4 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 123");
    } else {
      if (
        tmpNumeros === "1234" ||
        tmpNumeros === "12345" ||
        tmpNumeros === "123456" ||
        tmpNumeros === "1234567" ||
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 4 ya esta");
      } else {
        if (tmpNumeros !== "1234" && tmpNumeros === "1") {
          alert("falta el 23");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 3");
          } else {
            divNumeros.innerHTML = tmpNumeros + "4";
            tmpNumeros = tmpNumeros + "4";
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABC");
    } else {
      if (
        tmpLetras === "ABCD" ||
        tmpLetras === "ABCDE" ||
        tmpLetras === "ABCDEF" ||
        tmpLetras === "ABCDEFG" ||
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("la D ya existe");
      } else {
        if (tmpLetras !== "ABCD" && tmpLetras === "A") {
          alert("falta BC");
        } else {
          if (tmpLetras === "AB") {
            alert("falta la C");
          } else {
            divLetras.innerHTML = tmpLetras + "D";
            tmpLetras = tmpLetras + "D";
          }
        }
      }
    }
  }
};

const ingresarE5 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 1234");
    } else {
      if (
        tmpNumeros === "12345" ||
        tmpNumeros === "123456" ||
        tmpNumeros === "1234567" ||
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 5 ya esta");
      } else {
        if (tmpNumeros !== "12345" && tmpNumeros === "1") {
          alert("falta el 234");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 34");
          } else {
            if (tmpNumeros === "123") {
              alert("falta el 4");
            } else {
              divNumeros.innerHTML = tmpNumeros + "5";
              tmpNumeros = tmpNumeros + "5";
            }
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABCD");
    } else {
      if (
        tmpLetras === "ABCDE" ||
        tmpLetras === "ABCDEF" ||
        tmpLetras === "ABCDEFG" ||
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("ya existe la E");
      } else {
        if (tmpLetras !== "ABCDE" && tmpLetras === "A") {
          alert("falta BCD");
        } else {
          if (tmpLetras === "AB") {
            alert("falta CD");
          } else {
            if (tmpLetras === "ABC") {
              alert("falta D");
            } else {
              divLetras.innerHTML = tmpLetras + "E";
              tmpLetras = tmpLetras + "E";
            }
          }
        }
      }
    }
  }
};

const ingresarF6 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 12345");
    } else {
      if (
        tmpNumeros === "123456" ||
        tmpNumeros === "1234567" ||
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 6 ya esta");
      } else {
        if (tmpNumeros !== "123456" && tmpNumeros === "1") {
          alert("falta el 2345");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 345");
          } else {
            if (tmpNumeros === "123") {
              alert("falta el 45");
            } else {
              if (tmpNumeros === "1234") {
                alert("falta el 5");
              } else {
                divNumeros.innerHTML = tmpNumeros + "6";
                tmpNumeros = tmpNumeros + "6";
              }
            }
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABCDE");
    } else {
      if (
        tmpLetras === "ABCDEF" ||
        tmpLetras === "ABCDEFG" ||
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("la F ya existe");
      } else {
        if (tmpLetras !== "ABCDEF" && tmpLetras === "A") {
          alert("falta BCDE");
        } else {
          if (tmpLetras === "AB") {
            alert("falta CDE");
          } else {
            if (tmpLetras === "ABC") {
              alert("falta la DE");
            } else {
              if (tmpLetras === "ABCD") {
                alert("falta la E");
              } else {
                divLetras.innerHTML = tmpLetras + "F";
                tmpLetras = tmpLetras + "F";
              }
            }
          }
        }
      }
    }
  }
};

const ingresarG7 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 123456");
    } else {
      if (
        tmpNumeros === "1234567" ||
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 7 ya esta");
      } else {
        if (tmpNumeros !== "1234567" && tmpNumeros === "1") {
          alert("falta el 23456");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 3456");
          } else {
            if (tmpNumeros === "123") {
              alert("falta el 456");
            } else {
              if (tmpNumeros === "1234") {
                alert("falta el 56");
              } else {
                if (tmpNumeros === "12345") {
                  alert("falta el 6");
                } else {
                  divNumeros.innerHTML = tmpNumeros + "7";
                  tmpNumeros = tmpNumeros + "7";
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABCDEF");
    } else {
      if (
        tmpLetras === "ABCDEFG" ||
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("la G ya existe");
      } else {
        if (tmpLetras !== "ABCDEFG" && tmpLetras === "A") {
          alert("falta BCDEF");
        } else {
          if (tmpLetras === "AB") {
            alert("falta CDEF");
          } else {
            if (tmpLetras === "ABC") {
              alert("falta la DEF");
            } else {
              if (tmpLetras === "ABCD") {
                alert("falta la EF");
              } else {
                if (tmpLetras === "ABCDE") {
                  alert("falta la F");
                } else {
                  divLetras.innerHTML = tmpLetras + "G";
                  tmpLetras = tmpLetras + "G";
                }
              }
            }
          }
        }
      }
    }
  }
};

const ingresarH8 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 1234567");
    } else {
      if (
        tmpNumeros === "12345678" ||
        tmpNumeros === "123456789" ||
        tmpNumeros === "1234567890"
      ) {
        alert("el 8 ya esta");
      } else {
        if (tmpNumeros !== "12345678" && tmpNumeros === "1") {
          alert("falta el 234567");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 34567");
          } else {
            if (tmpNumeros === "123") {
              alert("falta el 4567");
            } else {
              if (tmpNumeros === "1234") {
                alert("falta el 567");
              } else {
                if (tmpNumeros === "12345") {
                  alert("falta el 67");
                } else {
                  if (tmpNumeros === "123456") {
                    alert("falta el 7");
                  } else {
                    divNumeros.innerHTML = tmpNumeros + "8";
                    tmpNumeros = tmpNumeros + "8";
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABCDEFG");
    } else {
      if (
        tmpLetras === "ABCDEFGH" ||
        tmpLetras === "ABCDEFGHI" ||
        tmpLetras === "ABCDEFGHIJ"
      ) {
        alert("la H ya existe");
      } else {
        if (tmpLetras !== "ABCDEFG" && tmpLetras === "A") {
          alert("falta BCDEFG");
        } else {
          if (tmpLetras === "AB") {
            alert("falta CDEFG");
          } else {
            if (tmpLetras === "ABC") {
              alert("falta la DEFG");
            } else {
              if (tmpLetras === "ABCD") {
                alert("falta la EFG");
              } else {
                if (tmpLetras === "ABCDE") {
                  alert("falta la FG");
                } else {
                  if (tmpLetras === "ABCDEF") {
                    alert("falta la G");
                  } else {
                    divLetras.innerHTML = tmpLetras + "H";
                    tmpLetras = tmpLetras + "H";
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const ingresarI9 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 12345678");
    } else {
      if (tmpNumeros === "123456789" || tmpNumeros === "1234567890") {
        alert("el 9 ya esta");
      } else {
        if (tmpNumeros !== "123456789" && tmpNumeros === "1") {
          alert("falta el 2345678");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 345678");
          } else {
            if (tmpNumeros === "123") {
              alert("falta el 45678");
            } else {
              if (tmpNumeros === "1234") {
                alert("falta el 5678");
              } else {
                if (tmpNumeros === "12345") {
                  alert("falta el 678");
                } else {
                  if (tmpNumeros === "123456") {
                    alert("falta el 78");
                  } else {
                    if (tmpNumeros === "1234567") {
                      alert("falta el 8");
                    } else {
                      divNumeros.innerHTML = tmpNumeros + "9";
                      tmpNumeros = tmpNumeros + "9";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABCDEFGH");
    } else {
      if (tmpLetras === "ABCDEFGHI" || tmpLetras === "ABCDEFGHJ") {
        alert("la I ya existe");
      } else {
        if (tmpLetras !== "ABCDEFG" && tmpLetras === "A") {
          alert("falta BCDEFGH");
        } else {
          if (tmpLetras === "AB") {
            alert("falta CDEFGH");
          } else {
            if (tmpLetras === "ABC") {
              alert("falta la DEFGH");
            } else {
              if (tmpLetras === "ABCD") {
                alert("falta la EFGH");
              } else {
                if (tmpLetras === "ABCDE") {
                  alert("falta la FGH");
                } else {
                  if (tmpLetras === "ABCDEF") {
                    alert("falta la GH");
                  } else {
                    if (tmpLetras === "ABCDEFG") {
                      alert("falta la H");
                    } else {
                      divLetras.innerHTML = tmpLetras + "I";
                      tmpLetras = tmpLetras + "I";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const ingresarJ10 = () => {
  if (tmpLetras === "ABCDEFGHIJ") {
    if (tmpNumeros === "") {
      alert("falta el 123456789");
    } else {
      if (tmpNumeros === "1234567890") {
        alert("el 0 ya esta");
      } else {
        if (tmpNumeros !== "123456789" && tmpNumeros === "1") {
          alert("falta el 23456789");
        } else {
          if (tmpNumeros === "12") {
            alert("falta 3456789");
          } else {
            if (tmpNumeros === "123") {
              alert("falta el 456789");
            } else {
              if (tmpNumeros === "1234") {
                alert("falta el 56789");
              } else {
                if (tmpNumeros === "12345") {
                  alert("falta el 6789");
                } else {
                  if (tmpNumeros === "123456") {
                    alert("falta el 789");
                  } else {
                    if (tmpNumeros === "1234567") {
                      alert("falta el 89");
                    } else {
                      if (tmpNumeros === "12345678") {
                        alert("falta 9");
                      } else {
                        divNumeros.innerHTML = tmpNumeros + "0";
                        tmpNumeros = tmpNumeros + "0";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (tmpLetras === "") {
      alert("falta ABCDEFGHI");
    } else {
      if (tmpLetras === "ABCDEFGHIJ") {
        alert("la J ya existe");
      } else {
        if (tmpLetras !== "ABCDEFG" && tmpLetras === "A") {
          alert("falta BCDEFGHI");
        } else {
          if (tmpLetras === "AB") {
            alert("falta CDEFGHI");
          } else {
            if (tmpLetras === "ABC") {
              alert("falta la DEFGHI");
            } else {
              if (tmpLetras === "ABCD") {
                alert("falta la EFGHI");
              } else {
                if (tmpLetras === "ABCDE") {
                  alert("falta la FGHI");
                } else {
                  if (tmpLetras === "ABCDEF") {
                    alert("falta la GHI");
                  } else {
                    if (tmpLetras === "ABCDEFG") {
                      alert("falta la HI");
                    } else {
                      if (tmpLetras === "ABCDEFGH") {
                        alert("falta la I");
                      } else {
                        divLetras.innerHTML = tmpLetras + "J";
                        tmpLetras = tmpLetras + "J";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

//onclicks

bnt1.onclick = function () {
  ingresarA1();
};

bnt2.onclick = function () {
  ingresarB2();
};
bnt3.onclick = function () {
  ingresarC3();
};
bnt4.onclick = function () {
  ingresarD4();
};
bnt5.onclick = function () {
  ingresarE5();
};
bnt6.onclick = function () {
  ingresarF6();
};
bnt7.onclick = function () {
  ingresarG7();
};
bnt8.onclick = function () {
  ingresarH8();
};
bnt9.onclick = function () {
  ingresarI9();
};
bnt10.onclick = function () {
  ingresarJ10();
};
