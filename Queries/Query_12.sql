-- 12: Quais Personagens apareceram em mais de 30 episódios?
select `character` as `Ator/Atriz`, Episodes_appeared as Aparições
from  characters_v4
where  Episodes_appeared >= 30
group by `character`;