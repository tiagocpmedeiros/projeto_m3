 --  4- Quais os personagens que estiveram na série entre 2011 e 2015?

select `Character`, First_appearance, Last_appearance
 from characters_v4
where  First_appearance >= '2011' and  Last_appearance = '2015'
 order by  First_appearance  asc;