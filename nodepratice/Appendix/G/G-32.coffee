﻿# 객체를 생성합니다.
person = 
    name: "RintIanTta"
    language: "JavaScript"
    region: "Seoul, Korea"

# 리스트 내포를 생성합니다.
array = for key, value of person
    "#{key} - #{value}"

# 출력합니다.
console.log array