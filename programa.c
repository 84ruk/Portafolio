#include <stdio.h>
#include <stdlib.h>

// Definición de la estructura de un nodo de la lista enlazada
struct Node {
    int data;
    struct Node* next;
};

// Definición de la estructura de la tabla hash
struct HashTable {
    int size;
    struct Node** table;
};

// Función para inicializar la tabla hash
struct HashTable* initHashTable(int size) {
    struct HashTable* ht = (struct HashTable*)malloc(sizeof(struct HashTable));
    ht->size = size;

    // Asignar memoria para la tabla y inicializar cada entrada como una lista vacía
    ht->table = (struct Node**)malloc(size * sizeof(struct Node*));
    for (int i = 0; i < size; i++) {
        ht->table[i] = NULL;
    }

    return ht;
}

// Función de hashing simple (puede ser mejorada según los requisitos)
int hashFunction(int key, int size) {
    return key % size;
}

// Función para insertar un elemento en la tabla hash
void insert(struct HashTable* ht, int key) {
    // Calcular el índice de la tabla usando la función de hashing
    int index = hashFunction(key, ht->size);

    // Crear un nuevo nodo con el valor
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = key;
    newNode->next = NULL;

    // Si la entrada está vacía, agregar el nuevo nodo
    if (ht->table[index] == NULL) {
        ht->table[index] = newNode;
    } else {
        // Si hay colisión, agregar al final de la lista
        struct Node* temp = ht->table[index];
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
}

// Función para buscar un elemento en la tabla hash
struct Node* search(struct HashTable* ht, int key) {
    // Calcular el índice de la tabla usando la función de hashing
    int index = hashFunction(key, ht->size);

    // Buscar en la lista correspondiente
    struct Node* temp = ht->table[index];
    while (temp != NULL) {
        if (temp->data == key) {
            return temp; // Elemento encontrado
        }
        temp = temp->next;
    }

    return NULL; // Elemento no encontrado
}

// Función para imprimir la tabla hash
void printHashTable(struct HashTable* ht) {
    for (int i = 0; i < ht->size; i++) {
        printf("%d: ", i);
        struct Node* temp = ht->table[i];
        while (temp != NULL) {
            printf("%d -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\n");
    }
}

int main() {
    // Crear una tabla hash con tamaño 10
    struct HashTable* ht = initHashTable(10);

    // Insertar elementos en la tabla
    insert(ht, 10);
    insert(ht, 10);
    insert(ht, 11);
    insert(ht, 22);

    // Imprimir la tabla después de la inserción
    printf("Tabla Hash después de la inserción:\n");
    printHashTable(ht);

    // Buscar un elemento en la tabla
    int keyToSearch = 22;
    struct Node* result = search(ht, keyToSearch);
    if (result != NULL) {
        printf("Elemento %d encontrado en la tabla.\n", keyToSearch);
    } else {
        printf("Elemento %d no encontrado en la tabla.\n", keyToSearch);
    }

    // Liberar la memoria utilizada por la tabla hash (también deberías liberar la memoria de las listas enlazadas)
    free(ht->table);
    free(ht);

    return 0;
}
