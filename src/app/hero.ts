export interface Hero {
  id: number;
  name: string;
  description?: string;
    picture?: HTMLImageElement;
    level?: number;
    race?: string;
    hero_class?: string;
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
    hit_points?: number;
    time_create?: Date;
    time_update?: Date;
    is_active?: boolean;
}
