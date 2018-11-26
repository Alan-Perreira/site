#include <stdio.h>

struct Payer {
  char username[256];
  int hp;
  int mp;
};

int main(void) {

struct Payer perso1 = {
  "Alan", 100, 100
};

printf("Nom du joueur : %s\n", perso1.username);
printf("PV : %d et PM : %d\n", perso1.hp, perso1.mp);

  return 0;
}
