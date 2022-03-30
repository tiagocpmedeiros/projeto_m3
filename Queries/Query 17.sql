-- 15: Quais os personagens que estiveram na série entre 2014 e 2017?

select `Character` as Personagem, First_appearance as Primeira_aparicao, Last_appearance ultima_aparicao
from  characters_v4
where  First_appearance >= '2014' and  Last_appearance = '2017'
order by  First_appearance asc;