/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTodo: OnCreateTodoSubscription;
  onUpdateTodo: OnUpdateTodoSubscription;
  onDeleteTodo: OnDeleteTodoSubscription;
  onCreateRestaurant: OnCreateRestaurantSubscription;
  onUpdateRestaurant: OnUpdateRestaurantSubscription;
  onDeleteRestaurant: OnDeleteRestaurantSubscription;
  onCreateMenu: OnCreateMenuSubscription;
  onUpdateMenu: OnUpdateMenuSubscription;
  onDeleteMenu: OnDeleteMenuSubscription;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  rate?: number | null;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  isVeg?: ModelBooleanInput | null;
  rate?: ModelIntInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Restaurant = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: ModelMenuConnection | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection";
  items: Array<Menu | null>;
  nextToken?: string | null;
};

export type Menu = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  city?: string | null;
  isVeg?: boolean | null;
  rate?: number | null;
};

export type DeleteRestaurantInput = {
  id: string;
};

export type CreateMenuInput = {
  id?: string | null;
  name: string;
  price: number;
  isAvailable: boolean;
  restaurantMenuId?: string | null;
};

export type ModelMenuConditionInput = {
  name?: ModelStringInput | null;
  price?: ModelIntInput | null;
  isAvailable?: ModelBooleanInput | null;
  and?: Array<ModelMenuConditionInput | null> | null;
  or?: Array<ModelMenuConditionInput | null> | null;
  not?: ModelMenuConditionInput | null;
  restaurantMenuId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateMenuInput = {
  id: string;
  name?: string | null;
  price?: number | null;
  isAvailable?: boolean | null;
  restaurantMenuId?: string | null;
};

export type DeleteMenuInput = {
  id: string;
};

export type Post = {
  __typename: "Post";
  id: string;
  title?: string | null;
  description?: string | null;
  views?: number | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo | null>;
  nextToken?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  city?: ModelStringInput | null;
  isVeg?: ModelBooleanInput | null;
  rate?: ModelIntInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection";
  items: Array<Restaurant | null>;
  nextToken?: string | null;
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  price?: ModelIntInput | null;
  isAvailable?: ModelBooleanInput | null;
  and?: Array<ModelMenuFilterInput | null> | null;
  or?: Array<ModelMenuFilterInput | null> | null;
  not?: ModelMenuFilterInput | null;
  restaurantMenuId?: ModelIDInput | null;
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTodoFilterInput | null> | null;
  or?: Array<ModelSubscriptionTodoFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  city?: ModelSubscriptionStringInput | null;
  isVeg?: ModelSubscriptionBooleanInput | null;
  rate?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
  or?: Array<ModelSubscriptionRestaurantFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionIntInput | null;
  isAvailable?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionMenuFilterInput | null> | null;
  or?: Array<ModelSubscriptionMenuFilterInput | null> | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMenuMutation = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type UpdateMenuMutation = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type DeleteMenuMutation = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type ListPostsQuery = {
  __typename: "Post";
  id: string;
  title?: string | null;
  description?: string | null;
  views?: number | null;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    description: string;
    city: string;
    isVeg: boolean;
    menu?: {
      __typename: "ModelMenuConnection";
      nextToken?: string | null;
    } | null;
    rate?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetMenuQuery = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type ListMenusQuery = {
  __typename: "ModelMenuConnection";
  items: Array<{
    __typename: "Menu";
    id: string;
    name: string;
    price: number;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    restaurantMenuId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  city: string;
  isVeg: boolean;
  menu?: {
    __typename: "ModelMenuConnection";
    items: Array<{
      __typename: "Menu";
      id: string;
      name: string;
      price: number;
      isAvailable: boolean;
      createdAt: string;
      updatedAt: string;
      restaurantMenuId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  rate?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMenuSubscription = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type OnUpdateMenuSubscription = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

export type OnDeleteMenuSubscription = {
  __typename: "Menu";
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  restaurantMenuId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async CreateMenu(
    input: CreateMenuInput,
    condition?: ModelMenuConditionInput
  ): Promise<CreateMenuMutation> {
    const statement = `mutation CreateMenu($input: CreateMenuInput!, $condition: ModelMenuConditionInput) {
        createMenu(input: $input, condition: $condition) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMenuMutation>response.data.createMenu;
  }
  async UpdateMenu(
    input: UpdateMenuInput,
    condition?: ModelMenuConditionInput
  ): Promise<UpdateMenuMutation> {
    const statement = `mutation UpdateMenu($input: UpdateMenuInput!, $condition: ModelMenuConditionInput) {
        updateMenu(input: $input, condition: $condition) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMenuMutation>response.data.updateMenu;
  }
  async DeleteMenu(
    input: DeleteMenuInput,
    condition?: ModelMenuConditionInput
  ): Promise<DeleteMenuMutation> {
    const statement = `mutation DeleteMenu($input: DeleteMenuInput!, $condition: ModelMenuConditionInput) {
        deleteMenu(input: $input, condition: $condition) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMenuMutation>response.data.deleteMenu;
  }
  async ListPosts(): Promise<Array<ListPostsQuery>> {
    const statement = `query ListPosts {
        listPosts {
          __typename
          id
          title
          description
          views
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListPostsQuery>>response.data.listPosts;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            city
            isVeg
            menu {
              __typename
              nextToken
            }
            rate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  async GetMenu(id: string): Promise<GetMenuQuery> {
    const statement = `query GetMenu($id: ID!) {
        getMenu(id: $id) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMenuQuery>response.data.getMenu;
  }
  async ListMenus(
    filter?: ModelMenuFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMenusQuery> {
    const statement = `query ListMenus($filter: ModelMenuFilterInput, $limit: Int, $nextToken: String) {
        listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            price
            isAvailable
            createdAt
            updatedAt
            restaurantMenuId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMenusQuery>response.data.listMenus;
  }
  OnCreateTodoListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  > {
    const statement = `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
        onCreateTodo(filter: $filter) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
    >;
  }

  OnUpdateTodoListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  > {
    const statement = `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
        onUpdateTodo(filter: $filter) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
    >;
  }

  OnDeleteTodoListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  > {
    const statement = `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
        onDeleteTodo(filter: $filter) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
    >;
  }

  OnCreateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
  > {
    const statement = `subscription OnCreateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onCreateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRestaurant">>
    >;
  }

  OnUpdateRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
  > {
    const statement = `subscription OnUpdateRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onUpdateRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRestaurant">>
    >;
  }

  OnDeleteRestaurantListener(
    filter?: ModelSubscriptionRestaurantFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
  > {
    const statement = `subscription OnDeleteRestaurant($filter: ModelSubscriptionRestaurantFilterInput) {
        onDeleteRestaurant(filter: $filter) {
          __typename
          id
          name
          description
          city
          isVeg
          menu {
            __typename
            items {
              __typename
              id
              name
              price
              isAvailable
              createdAt
              updatedAt
              restaurantMenuId
            }
            nextToken
          }
          rate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRestaurant">>
    >;
  }

  OnCreateMenuListener(
    filter?: ModelSubscriptionMenuFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMenu">>
  > {
    const statement = `subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
        onCreateMenu(filter: $filter) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMenu">>
    >;
  }

  OnUpdateMenuListener(
    filter?: ModelSubscriptionMenuFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMenu">>
  > {
    const statement = `subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
        onUpdateMenu(filter: $filter) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMenu">>
    >;
  }

  OnDeleteMenuListener(
    filter?: ModelSubscriptionMenuFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMenu">>
  > {
    const statement = `subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
        onDeleteMenu(filter: $filter) {
          __typename
          id
          name
          price
          isAvailable
          createdAt
          updatedAt
          restaurantMenuId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMenu">>
    >;
  }
}
