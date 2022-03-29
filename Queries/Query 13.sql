-- 10: Em quantos episódios Cada Personagem apareceu?  
select Episodes_appeared, `character` as Personagem
from  characters_v4
where `actor/ess`  like '%'
group by Personagem;