#include <stdio.h>
int main(void) {
    int thisyear;
    scanf("%d", &thisyear);
    int gyeolage = thisyear - 1997;
    int jinage = thisyear - 2001;
    printf("%d - %d = %d\n", gyeolage, jinage, gyeolage-jinage);
}