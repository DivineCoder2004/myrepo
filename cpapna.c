#include<stdio.h> // Include the necessary header file for printf and scanf functions

int main()
{
    int r, volume ;
    printf("enter the radius of the circle\n");
    scanf("%d",&r);
    volume=(4/3)*3.14*r*r*r;
    printf("the volume is %d",volume);
    return 0;
} // Add a closing brace to fix the missing closing brace error


