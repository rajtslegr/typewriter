/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/profiles': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.profiles.id'];
          updated_at?: parameters['rowFilter.profiles.updated_at'];
          username?: parameters['rowFilter.profiles.username'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['profiles'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions['profiles'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.profiles.id'];
          updated_at?: parameters['rowFilter.profiles.updated_at'];
          username?: parameters['rowFilter.profiles.username'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.profiles.id'];
          updated_at?: parameters['rowFilter.profiles.updated_at'];
          username?: parameters['rowFilter.profiles.username'];
        };
        body: {
          /** profiles */
          profiles?: definitions['profiles'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  profiles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    id: string;
    updated_at?: string;
    username?: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: 'params=single-object';
  /** Preference */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /** Preference */
  preferCount: 'count=none';
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** profiles */
  'body.profiles': definitions['profiles'];
  'rowFilter.profiles.id': string;
  'rowFilter.profiles.updated_at': string;
  'rowFilter.profiles.username': string;
}

export interface operations {}

export interface external {}
